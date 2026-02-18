import { ingredientsDb } from '../pages/Tables/calTables';

const ingredientNameById = new Map(
  ingredientsDb.map((ingredient) => [ingredient.id, ingredient.name])
);

export const getAllIngredients = () => {
  return ingredientsDb;
};

export const getIngredientNameById = (ingredientId: number) => {
  return ingredientNameById.get(ingredientId);
};
