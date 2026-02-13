import { create } from 'zustand';
import type { Filter } from '../models/filter';

interface FiltersState {
  readonly keyword: Filter[];
  readonly type: Filter[];
  readonly ingredient: Filter[];
  readonly addKeyword: (filter: Filter) => void;
  readonly addType: (filter: Filter) => void;
  readonly addIngredient: (filter: Filter) => void;
  readonly removeKeyword: (value: Filter['value']) => void;
  readonly removeType: (value: Filter['value']) => void;
  readonly removeIngredient: (value: Filter['value']) => void;
  readonly clear: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  keyword: [],
  type: [],
  ingredient: [],

  addKeyword: (keyword) =>
    set((state) => ({
      keyword: state.keyword.some((k) => k.value === keyword.value)
        ? state.keyword
        : [...state.keyword, keyword],
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

  removeKeyword: (value) =>
    set((state) => ({
      keyword: state.keyword.filter((k) => k.value !== value),
    })),
  removeType: (value) =>
    set((state) => ({
      type: state.type.filter((t) => t.value !== value),
    })),
  removeIngredient: (value) =>
    set((state) => ({
      ingredient: state.ingredient.filter((i) => i.value !== value),
    })),

  clear: () => set({ keyword: [], type: [], ingredient: [] }),
}));

// The "First Principles" Challenge from Jonáš
// Before we commit to this, could you try implementing this filter state using only useContext and useReducer? Once it’s working, try to observe how many components re-render when you add a single meal.

// You’ll notice that in Context, any update forces a re-render on every consumer.

// Understanding this "broadcast" behavior is key to seeing why Zustand’s architecture is so different.

// Performance & Selectors
// Right now, you’re calling the hook like this:
// const { keyword, addKeyword } = useFiltersStore();

// By calling it without selectors, you’ve essentially turned Zustand back into a standard Context. Even if a component only needs meal, it will re-render whenever an ingredient or type is added.

// To take advantage of Zustand’s performance, grab only the specific slices you need:

// // Re-renders ONLY when the 'meal' array actually changes
// const keyword = useFiltersStore((state) => state.keyword);
// const addKeyword = useFiltersStore((state) => state.addKeyword);
// Pro-tip: LocalStorage Middleware
// Since we don't have the backend persistence ready yet, check out the persist middleware in Zustand. It’s a 1-liner that will automatically save these filters to localStorage, so they won't disappear when the user refreshes the page.
