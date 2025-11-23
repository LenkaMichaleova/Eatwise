export const ROUTES = {
  home: '/',
  profile: '/profile',
  database: '/database',
  databaseDetail: '/database/:databaseId',
  menu: '/menu',
  tables: '/tables',
  countCalories: '/count-calories',
  error: '*',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
