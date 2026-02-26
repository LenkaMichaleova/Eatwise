import type { Food } from '../../../models/food';
import { scaleMealsToDailyKj } from '../../../services/mealScalingService';
import type { GeneratedDailyMenu } from './generateDailyMenu';

export const getReplacementMealsByType = (
  currentMeal: Food,
  meals: Food[]
): Food[] => {
  return meals.filter(
    (meal) => meal.type === currentMeal.type && meal.id !== currentMeal.id
  );
};

export const replaceMealInDailyMenu = (
  dailyMenu: GeneratedDailyMenu,
  currentMealId: number,
  nextMeal: Food
): GeneratedDailyMenu | null => {
  const currentMeal = dailyMenu.meals.find((meal) => meal.id === currentMealId);

  if (!currentMeal || currentMeal.type !== nextMeal.type) {
    return null;
  }

  const meals = dailyMenu.meals.map((meal) =>
    meal.id === currentMealId ? nextMeal : meal
  );

  return {
    meals,
    totalKJ: meals.reduce((sum, meal) => sum + meal.kj, 0),
  };
};

export const replaceMealByIdInDailyMenu = (
  dailyMenu: GeneratedDailyMenu,
  currentMealId: number,
  nextMealId: number,
  mealsById: Map<number, Food>,
  selectedDailyKj: number
): GeneratedDailyMenu | null => {
  const nextMealBase = mealsById.get(nextMealId);

  if (!nextMealBase) {
    return null;
  }

  const scaledNextMeal = scaleMealsToDailyKj(
    [nextMealBase],
    selectedDailyKj
  )[0];

  return replaceMealInDailyMenu(dailyMenu, currentMealId, scaledNextMeal);
};
