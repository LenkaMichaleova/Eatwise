import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { filterMeals } from '../../services/filterService';
import { DatabaseMealCard } from './components/DatabaseMealCard';
import { MealSearchBar } from './components/MealSearchBar';
import { MealFilterBar } from './components/MealFilterBar';
import {
  DatabaseBoxHeaderStyled,
  DatabaseContentStyled,
  DatabaseHeaderStyled,
  DatabaseStyled,
} from './styles/databaseStyles';
import { SearchBarBoxStyled } from './styles/SearchBarStyles';
import { useFiltersStore } from '../../store/store';
import { useMemo, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { AddNewMealDialog } from './components/AddNewMealDialog';
import { useMeals } from '../../services/mealsService';
import { scaleMealsToDailyKj } from '../../services/mealScalingService';
import { KjPerDayForm } from '../../components/KjPerDayForm/KjPerDayForm';
import { getDailyKj, setDailyKj } from '../../services/dailyKjService';
import type { KjPerDayValue } from '../../models/kjPerDayOptions';

export const Database = () => {
  const { type, ingredient, keyword } = useFiltersStore();
  const [selectedDailyKj, setSelectedDailyKj] =
    useState<KjPerDayValue>(getDailyKj());
  const meals = useMeals();
  const filteredMeals = filterMeals({
    meals,
    keywordFilters: keyword,
    typeFilters: type,
    ingredientFilters: ingredient,
  });
  const mealsDataSorted = useMemo(
    () =>
      scaleMealsToDailyKj(filteredMeals, selectedDailyKj).sort((a, b) =>
        a.title.localeCompare(b.title, 'cs')
      ),
    [filteredMeals, selectedDailyKj]
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DatabaseStyled>
      <DatabaseHeaderStyled>
        <SectionTitle title="Databáze jídel" />
      </DatabaseHeaderStyled>

      <DatabaseBoxHeaderStyled>
        <SearchBarBoxStyled>
          <MealSearchBar />
          <MealFilterBar />
        </SearchBarBoxStyled>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <KjPerDayForm
            value={selectedDailyKj}
            onChange={(value) => {
              setSelectedDailyKj(value);
              setDailyKj(value);
            }}
          />
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
        </Box>
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
