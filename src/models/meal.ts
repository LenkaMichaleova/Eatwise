export type foodTypes = 'breakfast' | 'snack1' | 'lunch' | 'snack2' | 'dinner';

export type Meal = {
  id: number;
  name: string;
  type: foodTypes;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};
