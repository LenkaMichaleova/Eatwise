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
import { Box, Button, Typography } from '@mui/material';

export const Database = () => {
  const { type, ingredient, keyword } = useFiltersStore();
  const filteredMeals = filterMeals({
    keywordFilters: keyword,
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
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 2,
          marginTop: 2,
          marginBottom: 1,
        }}
      >
        <SearchBarBoxStyled>
          <MealSearchBar />
          <MealFilterBar />
        </SearchBarBoxStyled>
        <Button
          variant="contained"
          color="primary"
          sx={{ p: { xs: 1, sm: 2 } }}
        >
          <Typography
            variant="subtitle2"
            color="secondary"
          >{`Přidat jídlo`}</Typography>
        </Button>
      </Box>
      <DatabaseContentStyled>
        {mealsDataSorted.map((meal) => (
          <DatabaseMealCard key={meal.id} data={meal} />
        ))}
      </DatabaseContentStyled>
    </DatabaseStyled>
  );
};
