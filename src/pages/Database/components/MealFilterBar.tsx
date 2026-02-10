import { Button, Chip } from '@mui/material';
import { useFiltersStore } from '../../../store/store';
import { FilterBarStyled } from '../styles/filterBarStyles';

const FilterBar = () => {
  const { type, ingredient, removeType, removeIngredient, clear } =
    useFiltersStore();

  if (type.length === 0 && ingredient.length === 0) return null;

  return (
    <FilterBarStyled>
      {type.map((typeItem) => (
        <Chip
          key={`type-${typeItem.id}`}
          label={`Typ: ${typeItem.label}`}
          onDelete={() => removeType(typeItem.id)}
          color="primary"
          variant="outlined"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        />
      ))}
      {ingredient.map((ingredientItem) => (
        <Chip
          key={`ingredient-${ingredientItem.id}`}
          label={`Ingredience: ${ingredientItem.label}`}
          onDelete={() => removeIngredient(ingredientItem.id)}
          color="primary"
          variant="outlined"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        />
      ))}

      <Button onClick={clear}>{`Vymazat všechny filtry`}</Button>
    </FilterBarStyled>
  );
};

export default FilterBar;
