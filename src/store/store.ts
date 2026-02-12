import { create } from 'zustand';
import type { Filter } from '../models/filter';

interface FiltersState {
  readonly meal: Filter[];
  readonly type: Filter[];
  readonly ingredient: Filter[];
  readonly addMeal: (filter: Filter) => void;
  readonly addType: (filter: Filter) => void;
  readonly addIngredient: (filter: Filter) => void;
  readonly removeMeal: (value: Filter['value']) => void;
  readonly removeType: (value: Filter['value']) => void;
  readonly removeIngredient: (value: Filter['value']) => void;
  readonly clear: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  meal: [],
  type: [],
  ingredient: [],

  addMeal: (meal) =>
    set((state) => ({
      meal: state.meal.some((m) => m.value === meal.value)
        ? state.meal
        : [...state.meal, meal],
    })),
  addType: (type) =>
    set((state) => ({
      type: state.type.some((t) => t.value === type.value)
        ? state.type
        : [...state.type, type],
    })),
  addIngredient: (ingredient) =>
    set((state) => ({
      ingredient: state.ingredient.some((i) => i.value === ingredient.value)
        ? state.ingredient
        : [...state.ingredient, ingredient],
    })),

  removeMeal: (value) =>
    set((state) => ({
      meal: state.meal.filter((m) => m.value !== value),
    })),
  removeType: (value) =>
    set((state) => ({
      type: state.type.filter((t) => t.value !== value),
    })),
  removeIngredient: (value) =>
    set((state) => ({
      ingredient: state.ingredient.filter((i) => i.value !== value),
    })),

  clear: () => set({ meal: [], type: [], ingredient: [] }),
}));
