import { useSyncExternalStore } from 'react';
import { foodData } from '../foodData';
import type { Food } from '../models/food';
import type { FoodIngredient } from '../models/foodIngredient';
import type { MealFormData } from '../models/mealFormData';
import { ingredientsDb } from '../pages/Tables/calTables';
import { storageService } from './localStorageService';

const MEALS_STORAGE_KEY = 'meals-database';

const listeners = new Set<VoidFunction>();
let mealsCache: Food[] | null = null;

const roundToOneDecimal = (value: number) => Math.round(value * 10) / 10;

const emitChange = () => {
  for (const listener of listeners) {
    listener();
  }
};

const subscribe = (listener: VoidFunction) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

const isFood = (value: unknown): value is Food => {
  if (!isRecord(value)) {
    return false;
  }

  const hasId = typeof value.id === 'number';
  const hasTitle = typeof value.title === 'string';

  return hasId && hasTitle;
};

const isFoodArray = (value: unknown): value is Food[] => {
  if (!Array.isArray(value)) {
    return false;
  }

  for (const item of value) {
    if (!isFood(item)) {
      return false;
    }
  }

  return true;
};

const getSeedMeals = () => {
  const seedMeals: Food[] = [];

  for (const meal of foodData) {
    seedMeals.push(meal);
  }

  return seedMeals;
};

const initializeMealsCache = () => {
  const storedMeals = storageService.getItem(MEALS_STORAGE_KEY);

  if (isFoodArray(storedMeals)) {
    mealsCache = storedMeals;
    return mealsCache;
  }

  const seedMeals = getSeedMeals();
  mealsCache = seedMeals;
  storageService.setItem(MEALS_STORAGE_KEY, seedMeals);

  return mealsCache;
};

const saveMeals = (meals: Food[]) => {
  mealsCache = meals;
  storageService.setItem(MEALS_STORAGE_KEY, meals);
  emitChange();
};

const calculateMealNutrition = (ingredients: FoodIngredient[]) => {
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

const getNextMealId = (meals: Food[]) => {
  let maxId = 0;

  for (const meal of meals) {
    if (meal.id > maxId) {
      maxId = meal.id;
    }
  }

  return maxId + 1;
};

export const getAllMeals = () => {
  if (mealsCache) {
    return mealsCache;
  }

  return initializeMealsCache();
};

export const useMeals = () => {
  return useSyncExternalStore(subscribe, getAllMeals, getAllMeals);
};

export const getMealById = (mealId: number) => {
  return getAllMeals().find((meal) => meal.id === mealId);
};

export const addMeal = (formData: MealFormData) => {
  const currentMeals = getAllMeals();
  const nextId = getNextMealId(currentMeals);
  const nutrition = calculateMealNutrition(formData.ingredients);

  const newMeal: Food = {
    id: nextId,
    title: formData.name.trim(),
    type: formData.type,
    recipe: formData.recipe.trim(),
    ingredients: formData.ingredients,
    ...nutrition,
  };

  saveMeals([...currentMeals, newMeal]);
  return newMeal;
};

export const updateMeal = (mealId: number, updates: Partial<Food>) => {
  const currentMeals = getAllMeals();
  const mealToUpdate = currentMeals.find((meal) => meal.id === mealId);

  if (!mealToUpdate) {
    return null;
  }

  const updatedMeal = {
    ...mealToUpdate,
    ...updates,
  };

  const nextMeals: Food[] = [];

  for (const meal of currentMeals) {
    if (meal.id === mealId) {
      nextMeals.push(updatedMeal);
      continue;
    }

    nextMeals.push(meal);
  }

  saveMeals(nextMeals);

  return updatedMeal;
};

export const removeMeal = (mealId: number) => {
  const currentMeals = getAllMeals();
  const nextMeals = currentMeals.filter((meal) => meal.id !== mealId);

  if (nextMeals.length === currentMeals.length) {
    return false;
  }

  saveMeals(nextMeals);
  return true;
};
