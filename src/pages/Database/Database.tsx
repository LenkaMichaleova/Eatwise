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
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { AddNewMealDialog } from './components/AddNewMealDialog';
import { useMeals } from '../../services/mealsService';
import { kjPerDayOptions } from '../../models/kjPerDayOptions';
import type { KjPerDayValue } from '../../models/kjPerDayOptions';
import { getDailyKj, setDailyKj } from '../../services/dailyKjService';
import { scaleMealsToDailyKj } from '../../services/mealScalingService';

export const Database = () => {
  const { type, ingredient, keyword } = useFiltersStore();
  const meals = useMeals();
  const filteredMeals = filterMeals({
    meals,
    keywordFilters: keyword,
    typeFilters: type,
    ingredientFilters: ingredient,
  });
  const [selectedDailyKj, setSelectedDailyKj] =
    useState<KjPerDayValue>(getDailyKj());
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
      <DatabaseHeaderStylled>
        <SectionTitle title="Databáze jídel" />
      </DatabaseHeaderStylled>

      <DatabaseBoxHeaderStyled>
        <SearchBarBoxStyled>
          <MealSearchBar />
          <MealFilterBar />
        </SearchBarBoxStyled>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="kj-per-day-label">{`kJ/den`}</InputLabel>
            <Select
              labelId="kj-per-day-label"
              label="kJ/den"
              value={selectedDailyKj}
              onChange={(event) => {
                const nextValue = Number(event.target.value) as KjPerDayValue;
                setSelectedDailyKj(nextValue);
                setDailyKj(nextValue);
              }}
            >
              {kjPerDayOptions.map((option) => (
                <MenuItem value={option.value} key={option.value}>
                  <Typography variant="body1" color="textSecondary">
                    {option.label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
