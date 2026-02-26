import {
  DEFAULT_KJ_PER_DAY,
  kjPerDayOptions,
  type KjPerDayValue,
} from '../models/kjPerDayOptions';
import { storageService } from './localStorageService';

const DAILY_KJ_STORAGE_KEY = 'daily-kj-target';
const allowedValues = new Set<number>(
  kjPerDayOptions.map((option) => option.value)
);

const isKjPerDayValue = (value: unknown): value is KjPerDayValue => {
  return typeof value === 'number' && allowedValues.has(value);
};

export const getDailyKj = (): KjPerDayValue => {
  const storedValue = storageService.getItem(DAILY_KJ_STORAGE_KEY);

  if (isKjPerDayValue(storedValue)) {
    return storedValue;
  }

  return DEFAULT_KJ_PER_DAY;
};

export const setDailyKj = (value: KjPerDayValue) => {
  storageService.setItem(DAILY_KJ_STORAGE_KEY, value);
};
