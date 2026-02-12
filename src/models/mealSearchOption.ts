import type { MealSearchOptionType } from './mealSearchOptionType';

export type MealSearchOption = {
  type: MealSearchOptionType;
  id: number | string;
  label: string;
};
