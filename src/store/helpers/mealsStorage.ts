import { foodData } from '../../foodData';
import type { Food } from '../../models/food';
import {
  DEFAULT_KJ_PER_DAY,
  kjPerDayOptions,
} from '../../models/kjPerDayOptions';
import { storageService } from '../../services/localStorageService';

const MEALS_STORAGE_KEY = 'meals-database';

let mealsInMemory: Food[] | null = null;

const allowedKjValues: number[] = kjPerDayOptions.map((option) => option.value);

const normalizeMeal = (meal: Food): Food => {
  if (
    meal.baseDailyKj === undefined ||
    !allowedKjValues.includes(meal.baseDailyKj)
  ) {
    return {
      ...meal,
      baseDailyKj: DEFAULT_KJ_PER_DAY,
    };
  }

  return {
    ...meal,
    baseDailyKj: meal.baseDailyKj,
  };
};

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

const getSeedMeals = () => foodData.map(normalizeMeal);

const loadInitialMeals = (): Food[] => {
  const storedMeals = storageService.getItem(MEALS_STORAGE_KEY);

  if (isFoodArray(storedMeals)) {
    const normalizedStoredMeals = storedMeals.map(normalizeMeal);
    storageService.setItem(MEALS_STORAGE_KEY, normalizedStoredMeals);

    return normalizedStoredMeals;
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
