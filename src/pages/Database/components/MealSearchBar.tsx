import { Autocomplete, Box, TextField, Typography } from '@mui/material';
import type { AutocompleteChangeReason } from '@mui/material/useAutocomplete';
import { GridSearchIcon } from '@mui/x-data-grid';
import { useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import type { MealSearchOption } from '../../../models/mealSearchOption.ts';
import { MealSearchOptionType } from '../../../models/mealSearchOptionType.ts';
import { useNavigate } from 'react-router';
import { getMealsSearchData } from '../../../services/mealsSearchService.ts';
import { useFiltersStore } from '../../../store/store.ts';
import { SearchBarStyled } from '../styles/SearchBarStyles.ts';
import { buildLimitedOptions } from '../utils/buildLimitedOptions.ts';
import { useMeals } from '../../../services/mealsService.ts';

export const MealSearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const highlightedOptionRef = useRef<MealSearchOption | null>(null);
  const keywordCommittedRef = useRef(false);
  const meals = useMeals();
  const data = getMealsSearchData(meals);
  const { addType, addIngredient, addKeyword, type, ingredient } =
    useFiltersStore();
  const navigate = useNavigate();

  const options: MealSearchOption[] = useMemo(() => {
    if (!data) return [];

    const searchText = inputValue.trim().toLowerCase();

    const availableTypes = data.types.filter(
      (item) => !type.some((selected) => selected.value === item.id)
    );
    const availableIngredients = data.ingredients.filter(
      (item) => !ingredient.some((selected) => selected.value === item.id)
    );

    return [
      ...buildLimitedOptions(data.meals, MealSearchOptionType.MEAL, searchText),
      ...buildLimitedOptions(
        availableTypes,
        MealSearchOptionType.TYPE,
        searchText
      ),
      ...buildLimitedOptions(
        availableIngredients,
        MealSearchOptionType.INGREDIENT,
        searchText
      ),
    ];
  }, [data, inputValue, type, ingredient]);

  const addKeywordFilter = (keywordRaw: string) => {
    const keyword = keywordRaw.trim();
    if (keyword.length === 0) return;
    addKeyword({ value: keyword.toLowerCase(), label: keyword });
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    if (highlightedOptionRef.current) return;

    if (inputValue.trim().length === 0) return;

    event.preventDefault();
    event.stopPropagation();

    keywordCommittedRef.current = true;
    addKeywordFilter(inputValue);
    setInputValue('');
    requestAnimationFrame(() => {
      inputRef.current?.blur();
    });
  };

  const handleChange = (
    _: unknown,
    value: MealSearchOption | string | null,
    reason: AutocompleteChangeReason
  ) => {
    if (!value) return;

    if (reason === 'selectOption' && typeof value !== 'string') {
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
      keywordCommittedRef.current = false;
      return;
    }

    if (reason === 'createOption') {
      if (keywordCommittedRef.current) {
        keywordCommittedRef.current = false;
        return;
      }

      const keyword =
        typeof value === 'string' ? value : (value as MealSearchOption).label;
      addKeywordFilter(keyword);
      setInputValue('');
      keywordCommittedRef.current = false;
      requestAnimationFrame(() => {
        inputRef.current?.blur();
      });
    }
  };

  return (
    <SearchBarStyled>
      <Autocomplete
        freeSolo
        noOptionsText={`Žádné výsledky`}
        popupIcon={null}
        options={options}
        onHighlightChange={(_, option) => {
          highlightedOptionRef.current = option as MealSearchOption | null;
        }}
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
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.label
        }
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
            inputRef={inputRef}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GridSearchIcon fontSize="small" />
                <Typography variant="body2">{`Vyhledat`}</Typography>
              </Box>
            }
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
              params.inputProps.onKeyDown?.(event);
              handleInputKeyDown(event);
            }}
          />
        )}
      />
    </SearchBarStyled>
  );
};
