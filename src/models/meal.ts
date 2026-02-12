export type foodTypes = 'breakfast' | 'snack1' | 'lunch' | 'snack2' | 'dinner';

export type FoodIngredient = {
  ingredientId: number;
  amount: number;
};

export type Meal = {
  id: number;
  title: string;
  type: foodTypes;
  calories: number;
  kj: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
  ingredients: FoodIngredient[];
};
