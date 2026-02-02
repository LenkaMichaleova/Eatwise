import type { GeneratedDailyMenu } from '../pages/Menu/utils/generateDailyMenu';

export const DAYS = [
  'Pondělí',
  'Úterý',
  'Středa',
  'Čtvrtek',
  'Pátek',
  'Sobota',
  'Neděle',
] as const;

export type Days = (typeof DAYS)[number];

export type WeeklyMenu = Record<Days, GeneratedDailyMenu>;
