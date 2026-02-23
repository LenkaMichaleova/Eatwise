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

interface EditDetailIngredientDialogProps {
  onClose: () => void;
  currentIngredient: FoodIngredient;
  onSave: (ingredient: FoodIngredient) => void;
}

export const EditDetailIngredientDialog = ({
  currentIngredient,
  onSave,
  onClose,
}: EditDetailIngredientDialogProps) => {
  const ingredients = getAllIngredients();
  const { control, register, handleSubmit } = useForm<{
    ingredientId: number;
    amount: number;
  }>({
    defaultValues: {
      ingredientId: currentIngredient.ingredientId,
      amount: currentIngredient.amount,
    },
  });

  const handleSave = ({
    ingredientId,
    amount,
  }: {
    ingredientId: number;
    amount: number;
  }) => {
    if (amount <= 0) {
      onClose();
      return;
    }

    onSave({ ingredientId, amount });
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle
        variant="h5"
        color="primary"
      >{`Změnit ingredienci`}</DialogTitle>

      <DialogContent sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        <Controller
          control={control}
          name="ingredientId"
          render={({ field }) => (
            <Autocomplete
              options={ingredients}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              noOptionsText={`Zadejte alespoň 2 znaky nebo nebyla nalezena žádná ingredience`}
              value={
                ingredients.find(
                  (ingredient) => ingredient.id === field.value
                ) ?? null
              }
              onChange={(_, value) => {
                if (value) {
                  field.onChange(value.id);
                }
              }}
              renderInput={(params) => (
                <TextField {...params} label={`Název Ingredience`} fullWidth />
              )}
            />
          )}
        />

        <TextField
          fullWidth
          label={`Množství (g)`}
          type="number"
          {...register('amount', { valueAsNumber: true })}
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
