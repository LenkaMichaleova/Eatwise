import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { getAllIngredients } from '../../../../services/ingredientsService';
import type { FoodIngredient } from '../../../../models/foodIngredient';
import { Controller, useForm } from 'react-hook-form';

export const AddDetailIngredientDialog = ({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave?: (ingredient: FoodIngredient) => void;
}) => {
  const ingredients = getAllIngredients();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodIngredient>({
    defaultValues: {
      ingredientId: 0,
      amount: 10,
    },
  });

  const handleSave = ({ ingredientId, amount }: FoodIngredient) => {
    if (!ingredientId || amount <= 0) {
      onClose();
      return;
    }

    onSave?.({
      ingredientId,
      amount,
    });

    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle
        variant="h5"
        color="primary"
      >{`Přidat ingredienci`}</DialogTitle>

      <DialogContent sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        <Controller
          control={control}
          name="ingredientId"
          render={({ field }) => (
            <Autocomplete
              options={ingredients}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              filterOptions={(options, state) => {
                const query = state.inputValue.trim().toLowerCase();

                if (query.length < 2) {
                  return [];
                }

                return options.filter((option) =>
                  option.name.toLowerCase().includes(query)
                );
              }}
              noOptionsText={`Žádné ingredience`}
              value={
                ingredients.find(
                  (ingredient) => ingredient.id === field.value
                ) ?? null
              }
              onChange={(_, value) => {
                field.onChange(value?.id ?? 0);
              }}
              renderInput={(params) => (
                <TextField {...params} label={`Název Ingredience`} fullWidth />
              )}
              sx={{ mt: 1 }}
            />
          )}
        />

        <TextField
          fullWidth
          label={`Množství (g)`}
          type="number"
          error={Boolean(errors.amount)}
          helperText={errors.amount?.message}
          {...register('amount', {
            valueAsNumber: true,
            min: {
              value: 0,
              message: 'Množství nesmí být záporné',
            },
          })}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{`Zavřít`}</Button>
        <Button
          variant="contained"
          onClick={handleSubmit(handleSave)}
          sx={{ color: 'white' }}
        >
          {`Uložit`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
