import { foodData } from '../../foodData';
import type { foodTypes } from './models/row';

function createData(
  id: number,
  name: string,
  type: foodTypes,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { id, name, type, calories, fat, carbs, protein };
}

export const rows = foodData.map((food) =>
  createData(
    food.id,
    food.title,
    food.type,
    food.kjPerDay['6000'].calories,
    food.kjPerDay['6000'].fats,
    food.kjPerDay['6000'].carbohydrates,
    food.kjPerDay['6000'].proteins
  )
);
