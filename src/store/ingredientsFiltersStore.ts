import { create } from 'zustand';
import type { Filter } from '../models/filter';

interface IngredientsFiltersState {
  readonly keyword: Filter[];
  readonly addKeyword: (filter: Filter) => void;
  readonly removeKeyword: (value: Filter['value']) => void;
  readonly clear: () => void;
}

export const useIngredientsFiltersStore = create<IngredientsFiltersState>(
  (set) => ({
    keyword: [],

    addKeyword: (keyword) =>
      set((state) => ({
        keyword: state.keyword.some((k) => k.value === keyword.value)
          ? state.keyword
          : [...state.keyword, keyword],
      })),

    removeKeyword: (value) =>
      set((state) => ({
        keyword: state.keyword.filter((k) => k.value !== value),
      })),

    clear: () => set({ keyword: [] }),
  })
);
