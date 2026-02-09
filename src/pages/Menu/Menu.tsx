import { useState, useEffect, useCallback } from 'react';
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
  getMealPlanForWeek,
  saveMealPlanForDay,
} from '../../services/mealPlanService';
import { Typography } from '@mui/material';
import { WeekPicker } from './components/WeekPicker';
import dayjs, { Dayjs } from 'dayjs';
import { getWeekRange, formatDate } from '../../utils/dateUtils';

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

  const handleDayMenuChange = useCallback(
    (dayDate: Dayjs) => {
      const day = DAYS[dayDate.isoWeekday() - 1];
      const newDayMenu = generateDailyMenu(foodData);

      setWeeklyMenu((prev) => {
        const updated = {
          ...prev,
          [day]: newDayMenu,
        };
        saveMealPlanForDay(dayDate, newDayMenu);
        return updated;
      });
    },
    [foodData]
  );
  // TODO : [day]:DailyMenu(filterUsed(foodData, prev))  -> to avoid duplicates in week

  const weekRange = getWeekRange(selectedWeek);
  const weekStart = weekRange.start;

  return (
    <FoodMenuStyled>
      <FoodMenuHeaderStyled>
        <SectionTitle title="Jídelníček" />
      </FoodMenuHeaderStyled>

      <FoodMenuCalendarStyled>
        <Typography variant="body1">
          {`Týden ${formatDate(weekStart)} - ${formatDate(weekRange.end)}`}
        </Typography>
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
