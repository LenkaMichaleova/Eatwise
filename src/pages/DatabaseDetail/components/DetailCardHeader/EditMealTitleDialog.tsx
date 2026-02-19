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
  const [title, setTitle] = useState(currentValue);

  const handleSave = () => {
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
        <TextField
          fullWidth
          value={title}
          onChange={(event) => setTitle(event.target.value)}
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
