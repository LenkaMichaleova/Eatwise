import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { filterMeals } from '../../services/filterService';
import { DatabaseMealCard } from './components/DatabaseMealCard';
import { MealSearchBar } from './components/MealSearchBar';
import { MealFilterBar } from './components/MealFilterBar';
import {
  DatabaseBoxHeaderStyled,
  DatabaseContentStyled,
  DatabaseHeaderStylled,
  DatabaseStyled,
} from './styles/databaseStyles';
import { SearchBarBoxStyled } from './styles/SearchBarStyles';
import { useFiltersStore } from '../../store/store';
import { useMemo, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { AddNewMealDialog } from './components/AddNewMealDialog';
import { useMeals } from '../../services/mealsService';

export const Database = () => {
  const { type, ingredient, keyword } = useFiltersStore();
  const meals = useMeals();
  const filteredMeals = filterMeals({
    meals,
    keywordFilters: keyword,
    typeFilters: type,
    ingredientFilters: ingredient,
  });
  const mealsDataSorted = useMemo(
    () =>
      [...filteredMeals].sort((a, b) => a.title.localeCompare(b.title, 'cs')),
    [filteredMeals]
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DatabaseStyled>
      <DatabaseHeaderStylled>
        <SectionTitle title="Databáze jídel" />
      </DatabaseHeaderStylled>

      <DatabaseBoxHeaderStyled>
        <SearchBarBoxStyled>
          <MealSearchBar />
          <MealFilterBar />
        </SearchBarBoxStyled>
        <Button
          variant="contained"
          color="primary"
          sx={{ p: { xs: 1, sm: 2 } }}
          onClick={() => setIsDialogOpen(true)}
        >
          <Typography
            variant="subtitle2"
            color="secondary"
          >{`Přidat jídlo`}</Typography>
        </Button>
      </DatabaseBoxHeaderStyled>

      <DatabaseContentStyled>
        {mealsDataSorted.map((meal) => (
          <DatabaseMealCard key={meal.id} data={meal} />
        ))}
      </DatabaseContentStyled>

      {isDialogOpen && (
        <AddNewMealDialog onClose={() => setIsDialogOpen(false)} />
      )}
    </DatabaseStyled>
  );
};
