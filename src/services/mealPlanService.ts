import type { WeeklyMenu } from '../models/weeklyMenu';
import { storageService } from './localStorageService';

const STORAGE_KEY_PREFIX = 'weeklyMenu';

// Získá jídelníček pro konkrétní týden
export const getMealPlanForWeek = (weekKey: string) => {
  const key = `${STORAGE_KEY_PREFIX}_${weekKey}`;
  return storageService.getItem(key);
};

// Uloží jídelníček pro konkrétní týden
export const saveMealPlanForWeek = (weekKey: string, data: WeeklyMenu) => {
  const key = `${STORAGE_KEY_PREFIX}_${weekKey}`;
  storageService.setItem(key, data);
};

// Smaže jídelníček pro konkrétní týden
export const deleteMealPlanForWeek = (weekKey: string) => {
  const key = `${STORAGE_KEY_PREFIX}_${weekKey}`;
  storageService.removeItem(key);
};
