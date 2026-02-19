import type { FoodIngredient } from './foodIngredient';
import type { FoodType } from './foodType';

export type MealFormData = {
  name: string;
  type: FoodType;
  ingredients: FoodIngredient[];
  recipe: string;
};
