import type { WeeklyMenu } from '../models/weeklyMenu';
import { storageService } from './localStorageService';

const STORAGE_KEY = 'weeklyMenu';

export const getAllMealPlans = () => {
  return storageService.getItem(STORAGE_KEY);
};

export const postMealPlan = (data: WeeklyMenu) => {
  storageService.setItem(STORAGE_KEY, data);
};
