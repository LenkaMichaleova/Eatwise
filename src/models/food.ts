import type { FoodIngredient } from './foodIngredient';
import type { FoodType } from './foodType';

export type Food = {
  id: number;
  title: string;
  recipe: string;
  type: FoodType;
  baseDailyKj?: number;
  calories: number;
  kj: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
  ingredients: FoodIngredient[];
};
