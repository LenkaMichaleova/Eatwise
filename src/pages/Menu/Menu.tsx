import { useState, useEffect } from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { getAllFoods } from '../../services/foodService';
import { generateDailyMenu } from './utils/generateDailyMenu';
import { DailyMenu } from './components/DailyMenu';
import {
  FoodMenuCalendarStyled,
  FoodMenuContentStyled,
  FoodMenuHeaderStyled,
  FoodMenuStyled,
} from './styles/foodMenuStyles';
import { DAYS, type WeeklyMenu } from '../../models/weeklyMenu';
import {
  getMealPlanForDay,
  getMealPlanForWeek,
  saveMealPlanForDay,
} from '../../services/mealPlanService';
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Typography,
// } from '@mui/material';
import { WeekPicker } from './components/WeekPicker';
import dayjs, { Dayjs } from 'dayjs';
import { getWeekRange } from '../../utils/dateUtils';

export const Menu = () => {
  const foodData = getAllFoods();
  const [selectedWeek, setSelectedWeek] = useState<Dayjs>(dayjs());
  const [weeklyMenu, setWeeklyMenu] = useState<WeeklyMenu>(
    getMealPlanForWeek(dayjs())
  );

  useEffect(() => {
    const saved = getMealPlanForWeek(selectedWeek);
    setWeeklyMenu(saved);
  }, [selectedWeek]);

  const getBlockedFoodIds = (dayDate: Dayjs) => {
    const lookbackDays = 14;
    const blockedFoodIds = new Set<number>();

    for (let offset = 1; offset <= lookbackDays; offset++) {
      const previousDay = dayDate.subtract(offset, 'day');
      const previousPlan = getMealPlanForDay(previousDay);

      if (!previousPlan) continue;

      previousPlan.meals.forEach((meal) => {
        blockedFoodIds.add(meal.id);
      });
    }

    return blockedFoodIds;
  };

  const handleDayMenuChange = (dayDate: Dayjs) => {
    const day = DAYS[dayDate.isoWeekday() - 1];
    const blockedFoodIds = getBlockedFoodIds(dayDate);
    const newDayMenu = generateDailyMenu(foodData, { blockedFoodIds });

    setWeeklyMenu((prev) => {
      const updated = {
        ...prev,
        [day]: newDayMenu,
      };
      saveMealPlanForDay(dayDate, newDayMenu);
      return updated;
    });
  };

  const weekRange = getWeekRange(selectedWeek);
  const weekStart = weekRange.start;

  return (
    <FoodMenuStyled>
      <FoodMenuHeaderStyled>
        <SectionTitle title="Jídelníček" />
      </FoodMenuHeaderStyled>

      <FoodMenuCalendarStyled>
        {/* <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="kj-per-day-label">{`kJ/den`}</InputLabel>
          <Select labelId="kj-per-day-label" label="kJ/den" value="6000">
            <MenuItem value="6000">
              <Typography
                variant="body1"
                color="textSecondary"
              >{`6000`}</Typography>
            </MenuItem>
          </Select>
        </FormControl> */}
        <WeekPicker value={selectedWeek} onChange={setSelectedWeek} />
      </FoodMenuCalendarStyled>

      <FoodMenuContentStyled>
        {DAYS.map((day, index) => {
          const dayDate = weekStart.add(index, 'day');
          return (
            <DailyMenu
              key={day}
              date={dayDate}
              menu={weeklyMenu[day]}
              onMenuChange={() => handleDayMenuChange(dayDate)}
            />
          );
        })}
      </FoodMenuContentStyled>
    </FoodMenuStyled>
  );
};
