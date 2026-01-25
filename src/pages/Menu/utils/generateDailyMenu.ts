import { groupBy } from 'lodash';
import type { Food } from '../../../foodData';

const dailyKJ = 6000;

const randomItem = <T>(array: T[]): T => {
  if (!array?.length) {
    throw new Error('Pro tuto kategorii nejsou dostupná jídla.');
  }
  return array[Math.floor(Math.random() * array.length)];
};

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
    ];

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
