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
import { useState } from 'react';
import { getAllIngredients } from '../../../../services/ingredientsService';
import type { FoodIngredient } from '../../../../models/foodIngredient';

export const AddDetailIngredientDialog = ({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave?: (ingredient: FoodIngredient) => void;
}) => {
  const ingredients = getAllIngredients();
  const [ingredientId, setIngredientId] = useState<number | ''>('');
  const [amount, setAmount] = useState(1);

  const handleSave = () => {
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
        <Select
          fullWidth
          label="Název Ingredience"
          value={ingredientId}
          onChange={(event) => setIngredientId(Number(event.target.value))}
        >
          <MenuItem value="">{`Vyberte ingredienci...`}</MenuItem>
          {ingredients.map((ingredient) => (
            <MenuItem key={ingredient.id} value={ingredient.id}>
              {ingredient.name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          fullWidth
          label="Množství (g)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{`Zavřít`}</Button>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{ color: 'white' }}
        >
          {`Uložit`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
