import { groupBy } from 'lodash';
import type { Food } from '../../../foodData';

const dailyKJ = 6000;

const randomItem = <T>(array?: T[]): T | undefined => {
  if (!array?.length) return undefined;
  return array[Math.floor(Math.random() * array.length)];
};

export type GeneratedDailyMenu = ReturnType<typeof generateDailyMenu>;

export const generateDailyMenu = (foodData: Food[]) => {
  const groups = groupBy(foodData, 'type');

  const attempts = 5;
  let bestCombo: Food[] = [];
  let bestDiff = Infinity;

  for (let i = 0; i < attempts; i++) {
    const candidate = [
      randomItem(groups['breakfast']),
      randomItem(groups['snack1']),
      randomItem(groups['lunch']),
      randomItem(groups['snack2']),
      randomItem(groups['dinner']),
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
