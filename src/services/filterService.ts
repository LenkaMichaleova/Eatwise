import type { Filter } from '../models/filter';
import { foodData } from '../foodData';

const FOOD_TYPE_LABELS: Record<string, string> = {
  Snídaně: 'breakfast',
  'Svačina 1': 'snack1',
  Oběd: 'lunch',
  'Svačina 2': 'snack2',
  Večeře: 'dinner',
};

export const filterMeals = (
  typeFilters: Filter[],
  ingredientFilters: Filter[]
) => {
  return foodData.filter((meal) => {
    if (typeFilters.length > 0) {
      const matchesType = typeFilters.some((f) => {
        const foodType = FOOD_TYPE_LABELS[f.label] || f.label;
        return meal.type === foodType;
      });
      if (!matchesType) return false;
    }

    if (ingredientFilters.length > 0) {
      const mealIngredientIds = meal.ingredients.map((ing) => ing.ingredientId);
      const matchesIngredient = ingredientFilters.every((f) =>
        mealIngredientIds.includes(f.id)
      );
      if (!matchesIngredient) return false;
    }

    return true;
  });
};
