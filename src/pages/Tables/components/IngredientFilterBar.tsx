import { Button, Chip } from '@mui/material';
import { useIngredientsFiltersStore } from '../../../store/ingredientsFiltersStore';
import {
  FilterBarChipStyles,
  FilterBarStyled,
} from '../../Database/styles/filterBarStyles';

export const IngredientFilterBar = () => {
  const { keyword, removeKeyword, clear } = useIngredientsFiltersStore();

  if (keyword.length === 0) return null;

  return (
    <FilterBarStyled>
      {keyword.map((keywordItem) => (
        <Chip
          key={`keyword-${keywordItem.value}`}
          label={`${keywordItem.label}`}
          onDelete={() => removeKeyword(keywordItem.value)}
          color="primary"
          variant="outlined"
          sx={FilterBarChipStyles}
        />
      ))}
      <Button onClick={clear}>{`Vymazat všechny filtry`}</Button>
    </FilterBarStyled>
  );
};
