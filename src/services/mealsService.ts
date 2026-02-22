import type { Food } from '../models/food';
import type { MealFormData } from '../models/mealFormData';
import { useMealsStore } from '../store/mealsStore';

export const getAllMeals = () => {
  return useMealsStore.getState().meals;
};

export const useMeals = () => useMealsStore((state) => state.meals);

export const getMealById = (mealId: number) => {
  return useMealsStore.getState().meals.find((meal) => meal.id === mealId);
};

export const addMeal = (formData: MealFormData) => {
  return useMealsStore.getState().addMeal(formData);
};

export const updateMeal = (mealId: number, updates: Partial<Food>) => {
  return useMealsStore.getState().updateMeal(mealId, updates);
};

export const removeMeal = (mealId: number) => {
  return useMealsStore.getState().removeMeal(mealId);
};
