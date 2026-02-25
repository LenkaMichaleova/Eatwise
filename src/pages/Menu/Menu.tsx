import { useState, useEffect, useMemo } from 'react';
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
import { WeekPicker } from './components/WeekPicker';
import dayjs, { Dayjs } from 'dayjs';
import { getWeekRange } from '../../utils/dateUtils';
import { getDailyKj, setDailyKj } from '../../services/dailyKjService';
import { KjPerDayForm } from '../../components/KjPerDayForm/KjPerDayForm';
import type { KjPerDayValue } from '../../models/kjPerDayOptions';
import { scaleMealsToDailyKj } from '../../services/mealScalingService';
import { replaceMealByIdInDailyMenu } from './utils/mealReplacement';

export const Menu = () => {
  const foodData = getAllFoods();
  const [selectedWeek, setSelectedWeek] = useState<Dayjs>(dayjs());
  const [selectedDailyKj, setSelectedDailyKj] =
    useState<KjPerDayValue>(getDailyKj());
  const [weeklyMenu, setWeeklyMenu] = useState<WeeklyMenu>(
    getMealPlanForWeek(dayjs())
  );
  const mealsById = useMemo(
    () => new Map(foodData.map((meal) => [meal.id, meal])),
    [foodData]
  );
  const scaledMeals = useMemo(
    () => scaleMealsToDailyKj(foodData, selectedDailyKj),
    [foodData, selectedDailyKj]
  );

  useEffect(() => {
    const saved = getMealPlanForWeek(selectedWeek);
    setWeeklyMenu(saved);
  }, [selectedWeek]);

  useEffect(() => {
    setWeeklyMenu((prev) => {
      const weekStart = selectedWeek.startOf('isoWeek');
      const nextWeeklyMenu = {} as WeeklyMenu;

      DAYS.forEach((day, index) => {
        const dayDate = weekStart.add(index, 'day');
        const currentDayMenu = prev[day];
        const baseMeals = currentDayMenu.meals.map(
          (meal) => mealsById.get(meal.id) ?? meal
        );
        const scaledMeals = scaleMealsToDailyKj(baseMeals, selectedDailyKj);
        const scaledDayMenu = {
          meals: scaledMeals,
          totalKJ: scaledMeals.reduce((sum, meal) => sum + meal.kj, 0),
        };

        nextWeeklyMenu[day] = scaledDayMenu;
        saveMealPlanForDay(dayDate, scaledDayMenu);
      });

      return nextWeeklyMenu;
    });
  }, [mealsById, selectedDailyKj, selectedWeek]);

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
    const newDayMenu = generateDailyMenu(foodData, {
      blockedFoodIds,
      targetDailyKj: selectedDailyKj,
    });

    setWeeklyMenu((prev) => {
      const updated = {
        ...prev,
        [day]: newDayMenu,
      };
      saveMealPlanForDay(dayDate, newDayMenu);
      return updated;
    });
  };

  const handleDayMealReplace = (
    dayDate: Dayjs,
    currentMealId: number,
    nextMealId: number
  ) => {
    const day = DAYS[dayDate.isoWeekday() - 1];

    setWeeklyMenu((prev) => {
      const currentDayMenu = prev[day];

      if (!currentDayMenu) {
        return prev;
      }

      const updatedDayMenu = replaceMealByIdInDailyMenu(
        currentDayMenu,
        currentMealId,
        nextMealId,
        mealsById,
        selectedDailyKj
      );

      if (!updatedDayMenu) {
        return prev;
      }

      const updatedWeek = {
        ...prev,
        [day]: updatedDayMenu,
      };

      saveMealPlanForDay(dayDate, updatedDayMenu);

      return updatedWeek;
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
        <KjPerDayForm
          value={selectedDailyKj}
          onChange={(value) => {
            setSelectedDailyKj(value);
            setDailyKj(value);
          }}
        />
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
              allMeals={scaledMeals}
              onMenuChange={() => handleDayMenuChange(dayDate)}
              onMealReplace={(currentMealId, nextMealId) =>
                handleDayMealReplace(dayDate, currentMealId, nextMealId)
              }
            />
          );
        })}
      </FoodMenuContentStyled>
    </FoodMenuStyled>
  );
};
