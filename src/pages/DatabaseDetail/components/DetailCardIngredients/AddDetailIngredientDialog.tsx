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

export const AddDetailIngredientDialog = ({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave?: (ingredient: FoodIngredient) => void;
}) => {
  const ingredients = getAllIngredients();
  const { control, register, handleSubmit } = useForm<FoodIngredient>({
    defaultValues: {
      ingredientId: 0,
      amount: 1,
    },
  });

  const handleSave = ({
    ingredientId,
    amount,
  }: FoodIngredient) => {
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
            <Select<number>
              fullWidth
              label="Název Ingredience"
              value={field.value}
              onChange={(event) => {
                field.onChange(Number(event.target.value));
              }}
            >
              <MenuItem value={0}>{`Vyberte ingredienci...`}</MenuItem>
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
