import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { updateMeal } from '../../../../services/mealsService';

interface EditRecipeDialogProps {
  mealId: number;
  currentValue: string;
  onClose: () => void;
}

export const EditRecipeDialog = ({
  mealId,
  currentValue,
  onClose,
}: EditRecipeDialogProps) => {
  const [recipe, setRecipe] = useState(currentValue);

  const handleSave = () => {
    updateMeal(mealId, { recipe: recipe.trim() });
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle variant="h5" color="primary">{`Upravit recept`}</DialogTitle>

      <DialogContent>
        <TextField
          multiline
          rows={6}
          fullWidth
          placeholder="Zadejte recept..."
          value={recipe}
          onChange={(event) => setRecipe(event.target.value)}
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
