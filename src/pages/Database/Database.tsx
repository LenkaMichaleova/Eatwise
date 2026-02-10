import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { filterMeals } from '../../services/filterService';
import { DatabaseMealCard } from './components/DatabaseMealCard';
import { MealSearchBar } from './components/MealSearchBar';
import MealFilterBar from './components/MealFilterBar';
import {
  DatabaseContentStyled,
  DatabaseHeaderStylled,
  DatabaseStyled,
} from './styles/databaseStyles';
import { SearchBarBoxStyled } from './styles/SearchBarStyles';
import { useFiltersStore } from '../../store/store';

export const Database = () => {
  const { type, ingredient } = useFiltersStore();
  const filteredMeals = filterMeals(type, ingredient);
  const mealsDataSorted = [...filteredMeals].sort((a, b) =>
    a.name.localeCompare(b.name, 'cs')
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
