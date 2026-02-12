const MealSearchOptionType = {
  MEAL: 'MEAL',
  TYPE: 'TYPE',
  INGREDIENT: 'INGREDIENT',
} as const;

type MealSearchOptionType =
  (typeof MealSearchOptionType)[keyof typeof MealSearchOptionType];

export { MealSearchOptionType };
