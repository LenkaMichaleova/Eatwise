import type { Food } from '../models/food';
import { DEFAULT_KJ_PER_DAY } from '../models/kjPerDayOptions';

const roundToOneDecimal = (value: number) => Math.round(value * 10) / 10;

const getMealBaseDailyKj = (meal: Food) => {
  return meal.baseDailyKj ?? DEFAULT_KJ_PER_DAY;
};

const scaleValue = (value: number, factor: number, round = false) => {
  const scaled = value * factor;
  return round ? Math.round(scaled) : roundToOneDecimal(scaled);
};

export const scaleMealToDailyKj = (meal: Food, targetDailyKj: number): Food => {
  const baseDailyKj = getMealBaseDailyKj(meal);

  if (targetDailyKj === baseDailyKj) {
    return {
      ...meal,
      baseDailyKj,
    };
  }

  const factor = targetDailyKj / baseDailyKj;

  return {
    ...meal,
    baseDailyKj,
    ingredients: meal.ingredients.map((ingredient) => ({
      ...ingredient,
      amount: roundToOneDecimal(ingredient.amount * factor),
    })),
    calories: scaleValue(meal.calories, factor, true),
    kj: scaleValue(meal.kj, factor, true),
    proteins: scaleValue(meal.proteins, factor),
    carbohydrates: scaleValue(meal.carbohydrates, factor),
    fats: scaleValue(meal.fats, factor),
  };
};

export const scaleMealsToDailyKj = (meals: Food[], targetDailyKj: number) => {
  return meals.map((meal) => scaleMealToDailyKj(meal, targetDailyKj));
};
