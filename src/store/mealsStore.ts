import { create } from 'zustand';
import type { Food } from '../models/food';
import type { MealFormData } from '../models/mealFormData';
import { calculateMealNutrition } from './helpers/mealsNutrition';
import { getAllMealsFromStorage, saveMeals } from './helpers/mealsStorage';

interface MealsState {
  readonly meals: Food[];
  readonly addMeal: (formData: MealFormData) => Food;
  readonly updateMeal: (mealId: number, updates: Partial<Food>) => Food | null;
  readonly removeMeal: (mealId: number) => boolean;
}

const getNextMealId = (meals: Food[]) => {
  return meals.reduce((maxId, meal) => Math.max(maxId, meal.id), 0) + 1;
};

export const useMealsStore = create<MealsState>((set) => {
  const saveAndSyncMeals = (nextMeals: Food[]) => {
    saveMeals(nextMeals);
    set({ meals: nextMeals });
  };

  return {
    meals: getAllMealsFromStorage(),
    addMeal: (formData) => {
      const currentMeals = getAllMealsFromStorage();
      const nextId = getNextMealId(currentMeals);
      const nutrition = calculateMealNutrition(formData.ingredients);

      const newMeal: Food = {
        id: nextId,
        title: formData.name.trim(),
        type: formData.type,
        baseDailyKj: formData.baseDailyKj,
        recipe: formData.recipe.trim(),
        ingredients: formData.ingredients,
        ...nutrition,
      };

      const nextMeals = [...currentMeals, newMeal];
      saveAndSyncMeals(nextMeals);
      return newMeal;
    },
    updateMeal: (mealId, updates) => {
      const currentMeals = getAllMealsFromStorage();
      const mealToUpdate = currentMeals.find((meal) => meal.id === mealId);

      if (!mealToUpdate) {
        return null;
      }

      let updatedMeal = {
        ...mealToUpdate,
        ...updates,
      };

      if (updates.ingredients) {
        const recalculatedNutrition = calculateMealNutrition(
          updates.ingredients
        );
        updatedMeal = {
          ...updatedMeal,
          ...recalculatedNutrition,
        };
      }

      const nextMeals = currentMeals.map((meal) =>
        meal.id === mealId ? updatedMeal : meal
      );
      saveAndSyncMeals(nextMeals);

      return updatedMeal;
    },
    removeMeal: (mealId) => {
      const currentMeals = getAllMealsFromStorage();
      const nextMeals = currentMeals.filter((meal) => meal.id !== mealId);

      if (nextMeals.length === currentMeals.length) {
        return false;
      }

      saveAndSyncMeals(nextMeals);
      return true;
    },
  };
});

export const useMeals = () => useMealsStore((state) => state.meals);
