import { Autocomplete, Box, TextField, Typography } from '@mui/material';
import type { AutocompleteChangeReason } from '@mui/material/useAutocomplete';
import { GridSearchIcon } from '@mui/x-data-grid';
import { useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { getAllIngredients } from '../../../services/ingredientsService';
import { useIngredientsFiltersStore } from '../../../store/ingredientsFiltersStore';
import { SearchBarStyled } from '../../Database/styles/SearchBarStyles';

export const IngredientSearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const highlightedOptionRef = useRef<string | null>(null);
  const keywordCommittedRef = useRef(false);
  const ingredients = getAllIngredients();
  const { addKeyword, keyword } = useIngredientsFiltersStore();

  const options: string[] = useMemo(() => {
    const searchText = inputValue.trim().toLowerCase();
    const selectedKeywords = new Set(keyword.map((item) => String(item.value)));

    return ingredients
      .map((ingredient) => ingredient.name)
      .filter((name) => {
        const normalized = name.toLowerCase();
        if (selectedKeywords.has(normalized)) return false;
        if (!searchText) return true;
        return normalized.includes(searchText);
      })
      .slice(0, 8);
  }, [ingredients, inputValue, keyword]);

  const addKeywordFilter = (keywordRaw: string) => {
    const normalizedKeyword = keywordRaw.trim().toLowerCase();
    if (normalizedKeyword.length === 0) return;
    addKeyword({ value: normalizedKeyword, label: keywordRaw.trim() });
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
    value: string | null,
    reason: AutocompleteChangeReason
  ) => {
    if (!value) return;

    if (reason === 'selectOption') {
      addKeywordFilter(value);
      setInputValue('');
      keywordCommittedRef.current = false;
      requestAnimationFrame(() => {
        inputRef.current?.blur();
      });
      return;
    }

    if (reason === 'createOption') {
      if (keywordCommittedRef.current) {
        keywordCommittedRef.current = false;
        return;
      }

      addKeywordFilter(value);
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
        size="small"
        freeSolo
        noOptionsText={`Žádné výsledky`}
        popupIcon={null}
        options={options}
        onHighlightChange={(_, option) => {
          highlightedOptionRef.current = option;
        }}
        getOptionLabel={(option) => option}
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
