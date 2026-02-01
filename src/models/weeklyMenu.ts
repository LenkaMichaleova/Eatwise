import type { generateDailyMenu } from '../pages/Menu/utils/generateDailyMenu';

export type WeeklyMenu = {
  Pondělí: ReturnType<typeof generateDailyMenu>;
  Úterý: ReturnType<typeof generateDailyMenu>;
  Středa: ReturnType<typeof generateDailyMenu>;
  Čtvrtek: ReturnType<typeof generateDailyMenu>;
  Pátek: ReturnType<typeof generateDailyMenu>;
  Sobota: ReturnType<typeof generateDailyMenu>;
  Neděle: ReturnType<typeof generateDailyMenu>;
};
