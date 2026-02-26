import type { Filter } from '../models/filter';
import type { Food } from '../models/food';
import type { Ingredient } from '../models/ingredient';
import { ingredientsDb } from '../pages/Tables/calTables';

const ingredientNameById = new Map(
  ingredientsDb.map((ingredient) => [
    ingredient.id,
    ingredient.name.toLowerCase(),
  ])
);

export const filterMeals = ({
  meals,
  keywordFilters,
  typeFilters,
  ingredientFilters,
}: {
  meals: Food[];
  keywordFilters: Filter[];
  typeFilters: Filter[];
  ingredientFilters: Filter[];
}) => {
  return meals.filter((meal) => {
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

    if (keywordFilters.length > 0) {
      const mealTitle = meal.title.toLowerCase();
      const ingredientNames = meal.ingredients
        .map((ing) => ingredientNameById.get(ing.ingredientId))
        .filter((name): name is string => Boolean(name));

      const matchesAllKeywords = keywordFilters.every((filter) => {
        const keyword = String(filter.value).trim().toLowerCase();
        if (!keyword) return true;
        if (mealTitle.includes(keyword)) return true;
        return ingredientNames.some((name) => name.includes(keyword));
      });

      if (!matchesAllKeywords) return false;
    }

    return true;
  });
};

export const filterIngredients = ({
  ingredients,
  keywordFilters,
}: {
  ingredients: Ingredient[];
  keywordFilters: Filter[];
}) => {
  return ingredients.filter((ingredient) => {
    if (keywordFilters.length === 0) {
      return true;
    }

    const ingredientName = ingredient.name.toLowerCase();

    return keywordFilters.every((filter) => {
      const keyword = String(filter.value).trim().toLowerCase();
      if (!keyword) return true;
      return ingredientName.includes(keyword);
    });
  });
};
