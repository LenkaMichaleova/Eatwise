import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from '@mui/material';
import { useState } from 'react';
import { updateMeal } from '../../../../services/mealsService';
import type { FoodType } from '../../../../models/foodType';

interface EditMealTypeDialogProps {
  mealId: number;
  currentValue: FoodType;
  onClose: () => void;
}

export const EditMealTypeDialog = ({
  mealId,
  currentValue,
  onClose,
}: EditMealTypeDialogProps) => {
  const [type, setType] = useState<FoodType>(currentValue);

  const handleSave = () => {
    updateMeal(mealId, { type });
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle
        variant="h5"
        color="primary"
      >{`Změna typu jídla`}</DialogTitle>

      <DialogContent>
        <Select
          fullWidth
          value={type}
          onChange={(event) => setType(event.target.value as FoodType)}
        >
          <MenuItem value="breakfast">{`Snídaně`}</MenuItem>
          <MenuItem value="snack1">{`Svačina 1`}</MenuItem>
          <MenuItem value="lunch">{`Oběd`}</MenuItem>
          <MenuItem value="snack2">{`Svačina 2`}</MenuItem>
          <MenuItem value="dinner">{`Večeře`}</MenuItem>
        </Select>
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
