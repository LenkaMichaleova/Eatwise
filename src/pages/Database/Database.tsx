import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { filterMeals } from '../../services/filterService';
import { DatabaseMealCard } from './components/DatabaseMealCard';
import { MealSearchBar } from './components/MealSearchBar';
import { MealFilterBar } from './components/MealFilterBar';
import {
  DatabaseContentStyled,
  DatabaseHeaderStylled,
  DatabaseStyled,
} from './styles/databaseStyles';
import { SearchBarBoxStyled } from './styles/SearchBarStyles';
import { useFiltersStore } from '../../store/store';
import { useMemo } from 'react';

export const Database = () => {
  const { type, ingredient } = useFiltersStore();
  const filteredMeals = filterMeals({
    typeFilters: type,
    ingredientFilters: ingredient,
  });
  const mealsDataSorted = useMemo(
    () =>
      [...filteredMeals].sort((a, b) => a.title.localeCompare(b.title, 'cs')),
    [filteredMeals]
  );

  return (
    <DatabaseStyled>
      <DatabaseHeaderStylled>
        <SectionTitle title="Databáze jídel" />
      </DatabaseHeaderStylled>
      <SearchBarBoxStyled>
        <MealSearchBar />
        <MealFilterBar />
      </SearchBarBoxStyled>
      <DatabaseContentStyled>
        {mealsDataSorted.map((meal) => (
          <DatabaseMealCard key={meal.id} data={meal} />
        ))}
      </DatabaseContentStyled>
    </DatabaseStyled>
  );
};
