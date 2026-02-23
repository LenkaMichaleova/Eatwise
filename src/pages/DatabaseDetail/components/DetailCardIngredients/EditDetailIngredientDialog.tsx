import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
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
            <Select
              fullWidth
              label="Název Ingredience"
              value={field.value}
              onChange={(event) => {
                field.onChange(Number(event.target.value));
              }}
            >
              {ingredients.map((ingredient) => (
                <MenuItem key={ingredient.id} value={ingredient.id}>
                  {ingredient.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />

        <TextField
          fullWidth
          label="Množství (g)"
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
