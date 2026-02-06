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
import { DAYS, type Days, type WeeklyMenu } from '../../models/weeklyMenu';
import {
  getMealPlanForWeek,
  saveMealPlanForWeek,
} from '../../services/mealPlanService';
import { Typography } from '@mui/material';
import { WeekPicker } from './components/WeekPicker';
import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import 'dayjs/locale/cs';

dayjs.extend(isoWeek);
dayjs.locale('cs');

const getWeekKey = (date: Dayjs): string => {
  return `${date.year()}-W${date.isoWeek()}`;
};

const getWeekRange = (date: Dayjs): { start: Dayjs; end: Dayjs } => {
  const start = date.startOf('isoWeek');
  const end = date.endOf('isoWeek');
  return { start, end };
};

const getDateForDay = (weekStart: Dayjs, dayIndex: number): Dayjs => {
  return weekStart.add(dayIndex, 'day');
};

const createEmptyWeeklyMenu = (): WeeklyMenu => {
  return DAYS.reduce<WeeklyMenu>((acc, day) => {
    acc[day] = { meals: [], totalKJ: 0 };
    return acc;
  }, {} as WeeklyMenu);
};

export const Menu = () => {
  const foodData = getAllFoods();
  const [selectedWeek, setSelectedWeek] = useState<Dayjs>(dayjs());
  const [weeklyMenu, setWeeklyMenu] = useState<WeeklyMenu>(
    createEmptyWeeklyMenu
  );

  useEffect(() => {
    const weekKey = getWeekKey(selectedWeek);
    const saved = getMealPlanForWeek(weekKey);
    setWeeklyMenu(saved || createEmptyWeeklyMenu());
  }, [selectedWeek]);

  const handleDayMenuChange = useCallback(
    (day: Days) => {
      const newDayMenu = generateDailyMenu(foodData);
      setWeeklyMenu((prev) => {
        const updated = {
          ...prev,
          [day]: newDayMenu,
        };

        const weekKey = getWeekKey(selectedWeek);
        saveMealPlanForWeek(weekKey, updated);
        return updated;
      });
    },
    [foodData, selectedWeek]
  );
  // TODO : [day]: generateDailyMenu(filterUsed(foodData, prev))  -> to avoid duplicates in week

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
              day={day}
              date={dayDate}
              menu={weeklyMenu[day]}
              onMenuChange={() => handleDayMenuChange(day)}
            />
          );
        })}
      </FoodMenuContentStyled>
    </FoodMenuStyled>
  );
};
