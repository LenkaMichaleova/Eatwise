import { create } from 'zustand';
import type { Filter } from '../models/filter';

interface FiltersState {
  readonly meal: Filter[];
  readonly type: Filter[];
  readonly ingredient: Filter[];
  readonly addMeal: (filter: Filter) => void;
  readonly addType: (filter: Filter) => void;
  readonly addIngredient: (filter: Filter) => void;
  readonly removeMeal: (id: Filter['id']) => void;
  readonly removeType: (id: Filter['id']) => void;
  readonly removeIngredient: (id: Filter['id']) => void;
  readonly clear: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  meal: [],
  type: [],
  ingredient: [],

  addMeal: (meal) =>
    set((state) => ({
      meal: state.meal.some((m) => m.id === meal.id)
        ? state.meal
        : [...state.meal, meal],
    })),
  addType: (type) =>
    set((state) => ({
      type: state.type.some((t) => t.id === type.id)
        ? state.type
        : [...state.type, type],
    })),
  addIngredient: (ingredient) =>
    set((state) => ({
      ingredient: state.ingredient.some((i) => i.id === ingredient.id)
        ? state.ingredient
        : [...state.ingredient, ingredient],
    })),

  removeMeal: (id) =>
    set((state) => ({
      meal: state.meal.filter((m) => m.id !== id),
    })),
  removeType: (id) =>
    set((state) => ({
      type: state.type.filter((t) => t.id !== id),
    })),
  removeIngredient: (id) =>
    set((state) => ({
      ingredient: state.ingredient.filter((i) => i.id !== id),
    })),

  clear: () => set({ meal: [], type: [], ingredient: [] }),
}));
