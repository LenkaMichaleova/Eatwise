import { Autocomplete, Box, TextField, Typography } from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';
import { useMemo, useState } from 'react';
import type { MealSearchOption } from '../../../models/mealSearchOption.ts';
import { MealSearchOptionType } from '../../../models/mealSearchOptionType.ts';
import { useNavigate } from 'react-router';
import { getMealsSearchData } from '../../../services/mealsSearchService.ts';
import { useFiltersStore } from '../../../store/store.ts';
import { SearchBarStyled } from '../styles/SearchBarStyles.ts';
import { buildLimitedOptions } from '../utils/buildLimitedOptions.ts';

export const MealSearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const data = getMealsSearchData();
  const { addType, addIngredient } = useFiltersStore();
  const navigate = useNavigate();

  const options: MealSearchOption[] = useMemo(() => {
    if (!data) return [];

    const searchText = inputValue.trim().toLowerCase();

    return [
      ...buildLimitedOptions(data.meals, MealSearchOptionType.MEAL, searchText),
      ...buildLimitedOptions(data.types, MealSearchOptionType.TYPE, searchText),
      ...buildLimitedOptions(
        data.ingredients,
        MealSearchOptionType.INGREDIENT,
        searchText
      ),
    ];
  }, [data, inputValue]);

  const handleChange = (_: unknown, value: MealSearchOption | null) => {
    if (!value) return;

    switch (value.type) {
      case MealSearchOptionType.MEAL:
        navigate(`${value.id}`);
        break;
      case MealSearchOptionType.TYPE:
        addType({ value: value.id, label: value.label });
        break;
      case MealSearchOptionType.INGREDIENT:
        addIngredient({ value: value.id, label: value.label });
        break;
    }

    setInputValue('');
  };

  return (
    <SearchBarStyled>
      <Autocomplete
        noOptionsText={`Žádné výsledky`}
        popupIcon={null}
        options={options}
        groupBy={(option) => {
          switch (option.type) {
            case MealSearchOptionType.MEAL:
              return 'Jídla';
            case MealSearchOptionType.TYPE:
              return 'Typ';
            case MealSearchOptionType.INGREDIENT:
              return 'Ingredience';
          }
        }}
        getOptionLabel={(option) => option.label}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={(_, value, reason) => {
          if (reason === 'input') {
            setInputValue(value);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GridSearchIcon fontSize="small" />
                <Typography variant="body2">{`Vyhledat`}</Typography>
              </Box>
            }
          />
        )}
      />
    </SearchBarStyled>
  );
};
