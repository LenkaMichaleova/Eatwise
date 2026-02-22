import { foodData } from '../../foodData';
import type { Food } from '../../models/food';
import { storageService } from '../../services/localStorageService';

const MEALS_STORAGE_KEY = 'meals-database';

let mealsInMemory: Food[] | null = null;

const isFoodArray = (value: unknown): value is Food[] => {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as Food).id === 'number' &&
        typeof (item as Food).title === 'string'
    )
  );
};

const getSeedMeals = () => [...foodData];

const loadInitialMeals = (): Food[] => {
  const storedMeals = storageService.getItem(MEALS_STORAGE_KEY);

  if (isFoodArray(storedMeals)) {
    return storedMeals;
  }

  const seedMeals = getSeedMeals();
  storageService.setItem(MEALS_STORAGE_KEY, seedMeals);

  return seedMeals;
};

const getInitialMeals = () => {
  if (mealsInMemory) {
    return mealsInMemory;
  }

  mealsInMemory = loadInitialMeals();

  return mealsInMemory;
};

export const saveMeals = (meals: Food[]) => {
  mealsInMemory = meals;
  storageService.setItem(MEALS_STORAGE_KEY, meals);
};

export const getAllMealsFromStorage = () => {
  return getInitialMeals();
};
