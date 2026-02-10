const MealSearchOptionType = {
  MEAL: 0,
  TYPE: 1,
  INGREDIENT: 2,
} as const;

type MealSearchOptionType =
  (typeof MealSearchOptionType)[keyof typeof MealSearchOptionType];

export { MealSearchOptionType };
