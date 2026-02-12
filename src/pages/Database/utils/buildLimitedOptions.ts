import type { MealSearchOption } from '../../../models/mealSearchOption';
import type { MealSearchOptionType } from '../../../models/mealSearchOptionType';

export const buildLimitedOptions = <
  T extends { id: number | string; name: string },
>(
  items: T[],
  type: MealSearchOptionType,
  searchText: string,
  limit: number = 5
): MealSearchOption[] => {
  let filtered = items;

  if (searchText) {
    filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
  }

  return filtered.slice(0, limit).map((item) => ({
    type,
    id: item.id,
    label: item.name,
  }));
};
