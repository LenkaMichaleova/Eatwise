import type { Food } from '../../../foodData2';

const dailyKJ = 6000;

const randomItem = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

const groupFoodsByType = (foods: Food[]) => {
  return {
    snidane: foods.filter((food) => food.type === 'snídaně'),
    svacina1: foods.filter((food) => food.type === 'svačina1'),
    obed: foods.filter((food) => food.type === 'oběd'),
    svacina2: foods.filter((food) => food.type === 'svačina2'),
    vecere: foods.filter((food) => food.type === 'večeře'),
  };
};

export const generateDailyMenu = (foodData: Food[]) => {
  const groups = groupFoodsByType(foodData);

  const attempts = 5;
  let bestCombo: Food[] = [];
  let bestDiff = Infinity;

  for (let i = 0; i < attempts; i++) {
    const candidate = [
      randomItem(groups.snidane),
      randomItem(groups.svacina1),
      randomItem(groups.obed),
      randomItem(groups.svacina2),
      randomItem(groups.vecere),
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
