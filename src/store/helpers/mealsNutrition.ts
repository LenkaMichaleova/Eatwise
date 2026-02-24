import type { FoodIngredient } from '../../models/foodIngredient';
import { ingredientsDb } from '../../pages/Tables/calTables';

const roundToOneDecimal = (value: number) => Math.round(value * 10) / 10;

export const calculateMealNutrition = (ingredients: FoodIngredient[]) => {
  const ingredientById = new Map(
    ingredientsDb.map((ingredient) => [ingredient.id, ingredient])
  );

  let caloriesTotal = 0;
  let proteinsTotal = 0;
  let carbohydratesTotal = 0;
  let fatsTotal = 0;

  for (const mealIngredient of ingredients) {
    const ingredient = ingredientById.get(mealIngredient.ingredientId);

    if (!ingredient) {
      continue;
    }

    const ratio = mealIngredient.amount / 100;

    caloriesTotal += ingredient.kcal * ratio;
    proteinsTotal += ingredient.proteins * ratio;
    carbohydratesTotal += ingredient.carbohydrates * ratio;
    fatsTotal += ingredient.fats * ratio;
  }

  return {
    calories: Math.round(caloriesTotal),
    kj: Math.round(caloriesTotal * 4.184),
    proteins: roundToOneDecimal(proteinsTotal),
    carbohydrates: roundToOneDecimal(carbohydratesTotal),
    fats: roundToOneDecimal(fatsTotal),
  };
};
