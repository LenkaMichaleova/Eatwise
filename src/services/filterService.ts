import type { Filter } from '../models/filter';
import { foodData } from '../foodData';

export const filterMeals = ({
  typeFilters,
  ingredientFilters,
}: {
  typeFilters: Filter[];
  ingredientFilters: Filter[];
}) => {
  return foodData.filter((meal) => {
    if (typeFilters.length > 0) {
      const matchesType = typeFilters.some((f) => meal.type === f.value);
      if (!matchesType) return false;
    }

    if (ingredientFilters.length > 0) {
      const mealIngredientIds = meal.ingredients.map((ing) => ing.ingredientId);
      const matchesIngredient = ingredientFilters.every((f) =>
        mealIngredientIds.includes(f.value as number)
      );
      if (!matchesIngredient) return false;
    }

    return true;
  });
};
