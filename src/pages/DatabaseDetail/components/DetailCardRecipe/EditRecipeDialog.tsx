import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
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
  const { register, handleSubmit } = useForm<{ recipe: string }>({
    defaultValues: {
      recipe: currentValue,
    },
  });

  const handleSave = ({ recipe }: { recipe: string }) => {
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
          {...register('recipe')}
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
