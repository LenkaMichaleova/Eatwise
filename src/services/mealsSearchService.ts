import { foodData } from '../foodData';
import { ingredientsDb } from '../pages/Tables/calTables';

export const getMealsSearchData = () => {
  return {
    meals: foodData.map((food) => ({
      id: food.id,
      name: food.title,
      type: food.type,
      calories: food.calories,
      protein: food.proteins,
      carbs: food.carbohydrates,
      fat: food.fats,
    })),
    types: [
      { id: 'breakfast', name: 'Snídaně' },
      { id: 'snack1', name: 'Svačina 1' },
      { id: 'lunch', name: 'Oběd' },
      { id: 'snack2', name: 'Svačina 2' },
      { id: 'dinner', name: 'Večeře' },
    ],
    ingredients: ingredientsDb.map((ing) => ({
      id: ing.id,
      name: ing.name,
    })),
  };
};
