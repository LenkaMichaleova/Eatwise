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
      { id: 1, name: 'Snídaně' },
      { id: 2, name: 'Svačina 1' },
      { id: 3, name: 'Oběd' },
      { id: 4, name: 'Svačina 2' },
      { id: 5, name: 'Večeře' },
    ],
    ingredients: ingredientsDb.map((ing) => ({
      id: ing.id,
      name: ing.name,
    })),
  };
};
