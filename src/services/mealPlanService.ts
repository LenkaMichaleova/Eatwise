import type { Dayjs } from 'dayjs';
import type { WeeklyMenu } from '../models/weeklyMenu';
import type { GeneratedDailyMenu } from '../pages/Menu/utils/generateDailyMenu';
import { DAYS } from '../models/weeklyMenu';
import { storageService } from './localStorageService';
import { formatDateKey } from '../utils/dateUtils';

const STORAGE_KEY_PREFIX = 'mealPlan';

export const getMealPlanForDay = (date: Dayjs) => {
  const key = `${STORAGE_KEY_PREFIX}_${formatDateKey(date)}`;
  return storageService.getItem(key);
};

export const saveMealPlanForDay = (date: Dayjs, data: GeneratedDailyMenu) => {
  const key = `${STORAGE_KEY_PREFIX}_${formatDateKey(date)}`;
  storageService.setItem(key, data);
};

export const getMealPlanForWeek = (startDate: Dayjs): WeeklyMenu => {
  const weekStart = startDate.startOf('isoWeek');
  const result: Partial<WeeklyMenu> = {};

  DAYS.forEach((day, index) => {
    const dayDate = weekStart.add(index, 'day');
    const dailyMenu = getMealPlanForDay(dayDate);
    result[day] = dailyMenu || { meals: [], totalKJ: 0 };
  });

  return result as WeeklyMenu;
};

export const deleteMealPlanForDay = (date: Dayjs) => {
  const key = `${STORAGE_KEY_PREFIX}_${formatDateKey(date)}`;
  storageService.removeItem(key);
};
