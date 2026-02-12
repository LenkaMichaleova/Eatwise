import { Button, Chip } from '@mui/material';
import { useFiltersStore } from '../../../store/store';
import {
  FilterBarChipStyles,
  FilterBarStyled,
} from '../styles/filterBarStyles';

export const MealFilterBar = () => {
  const { type, ingredient, removeType, removeIngredient, clear } =
    useFiltersStore();

  if (type.length === 0 && ingredient.length === 0) return null;

  return (
    <FilterBarStyled>
      {type.map((typeItem) => (
        <Chip
          key={`type-${typeItem.value}`}
          label={`Typ: ${typeItem.label}`}
          onDelete={() => removeType(typeItem.value)}
          color="primary"
          variant="outlined"
          sx={FilterBarChipStyles}
        />
      ))}
      {ingredient.map((ingredientItem) => (
        <Chip
          key={`ingredient-${ingredientItem.value}`}
          label={`Ingredience: ${ingredientItem.label}`}
          onDelete={() => removeIngredient(ingredientItem.value)}
          color="primary"
          variant="outlined"
          sx={FilterBarChipStyles}
        />
      ))}

      <Button onClick={clear}>{`Vymazat všechny filtry`}</Button>
    </FilterBarStyled>
  );
};
