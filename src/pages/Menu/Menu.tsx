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
import isoWeek from 'dayjs/plugin/isoWeek';
import 'dayjs/locale/cs';

dayjs.extend(isoWeek);
dayjs.locale('cs');

const getWeekRange = (date: Dayjs): { start: Dayjs; end: Dayjs } => {
  const start = date.startOf('isoWeek');
  const end = date.endOf('isoWeek');
  return { start, end };
};

const getDateForDay = (weekStart: Dayjs, dayIndex: number): Dayjs => {
  return weekStart.add(dayIndex, 'day');
};

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
    (dayIndex: number) => {
      const weekStart = getWeekRange(selectedWeek).start;
      const dayDate = getDateForDay(weekStart, dayIndex);
      const day = DAYS[dayIndex];
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
    [foodData, selectedWeek]
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
          {`Týden ${weekStart.format('DD.MM.YYYY')} - ${weekRange.end.format('DD.MM.YYYY')}`}
        </Typography>
        <WeekPicker value={selectedWeek} onChange={setSelectedWeek} />
      </FoodMenuCalendarStyled>

      <FoodMenuContentStyled>
        {DAYS.map((day, index) => {
          const dayDate = getDateForDay(weekStart, index);
          return (
            <DailyMenu
              key={day}
              date={dayDate}
              menu={weeklyMenu[day]}
              onMenuChange={() => handleDayMenuChange(index)}
            />
          );
        })}
      </FoodMenuContentStyled>
    </FoodMenuStyled>
  );
};
