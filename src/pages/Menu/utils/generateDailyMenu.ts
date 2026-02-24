import { groupBy } from 'lodash';
import type { Food } from '../../../models/food';
import type { GenerateDailyMenuOptions } from '../../../models/generateDailyMenuOptions';

const dailyKJ = 6000;

const randomItem = <T>(array?: T[]): T | undefined => {
  if (!array?.length) return undefined;
  return array[Math.floor(Math.random() * array.length)];
};

export type GeneratedDailyMenu = ReturnType<typeof generateDailyMenu>;

export const generateDailyMenu = (
  foodData: Food[],
  options?: GenerateDailyMenuOptions
) => {
  const groups = groupBy(foodData, 'type');
  const blockedFoodIds = options?.blockedFoodIds ?? new Set<number>();

  const attempts = 5;
  let bestCombo: Food[] = [];
  let bestDiff = Infinity;

  const pickMealByType = (type: Food['type']) => {
    const meals = groups[type] ?? [];
    if (!meals.length) return undefined;

    const unusedMeals = meals.filter((meal) => !blockedFoodIds.has(meal.id));
    const pool = unusedMeals.length ? unusedMeals : meals;

    return randomItem(pool);
  };

  for (let i = 0; i < attempts; i++) {
    const candidate = [
      pickMealByType('breakfast'),
      pickMealByType('snack1'),
      pickMealByType('lunch'),
      pickMealByType('snack2'),
      pickMealByType('dinner'),
    ].filter(Boolean) as Food[];

    if (candidate.length < 5) continue;

    const totalKJ = candidate.reduce((sum, meal) => sum + meal.kj, 0);
    const diff = Math.abs(totalKJ - dailyKJ);

    if (diff < bestDiff) {
      bestDiff = diff;
      bestCombo = candidate;
    }
  }

  return {
    meals: bestCombo,
    totalKJ: bestCombo.reduce((sum, meal) => sum + meal.kj, 0),
  };
};
