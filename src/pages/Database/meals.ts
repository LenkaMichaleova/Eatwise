import { foodData } from '../../foodData';
import type { FoodType } from '../../models/foodType';

function createData(
  id: number,
  name: string,
  type: FoodType,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { id, name, type, calories, fat, carbs, protein };
}

export const meals = foodData.map((food) =>
  createData(
    food.id,
    food.title,
    food.type,
    food.calories,
    food.fats,
    food.carbohydrates,
    food.proteins
  )
);
