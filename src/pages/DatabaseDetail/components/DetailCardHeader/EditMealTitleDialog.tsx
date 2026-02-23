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

interface EditMealTitleDialogProps {
  mealId: number;
  currentValue: string;
  onClose: () => void;
}

export const EditMealTitleDialog = ({
  mealId,
  currentValue,
  onClose,
}: EditMealTitleDialogProps) => {
  const { register, handleSubmit } = useForm<{ title: string }>({
    defaultValues: {
      title: currentValue,
    },
  });

  const handleSave = ({ title }: { title: string }) => {
    const nextTitle = title.trim();
    if (!nextTitle) {
      onClose();
      return;
    }

    updateMeal(mealId, { title: nextTitle });
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle
        variant="h5"
        color="primary"
      >{`Změna názvu jídla`}</DialogTitle>

      <DialogContent>
        <TextField fullWidth {...register('title')} />
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
