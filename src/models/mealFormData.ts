import type { FoodIngredient } from './foodIngredient';
import type { FoodType } from './foodType';
import type { KjPerDayValue } from './kjPerDayOptions';

export type MealFormData = {
  name: string;
  type: FoodType;
  baseDailyKj: KjPerDayValue;
  ingredients: FoodIngredient[];
  recipe: string;
};
