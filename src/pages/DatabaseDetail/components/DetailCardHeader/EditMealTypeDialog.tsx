import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ type: FoodType }>({
    defaultValues: {
      type: currentValue,
    },
  });

  const handleSave = ({ type }: { type: FoodType }) => {
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
        <Controller
          control={control}
          name="type"
          rules={{ required: 'Typ jídla je povinný' }}
          render={({ field }) => (
            <FormControl fullWidth error={Boolean(errors.type)}>
              <Select
                fullWidth
                value={field.value}
                onChange={(event) =>
                  field.onChange(event.target.value as FoodType)
                }
              >
                <MenuItem value="breakfast">{`Snídaně`}</MenuItem>
                <MenuItem value="snack1">{`Svačina 1`}</MenuItem>
                <MenuItem value="lunch">{`Oběd`}</MenuItem>
                <MenuItem value="snack2">{`Svačina 2`}</MenuItem>
                <MenuItem value="dinner">{`Večeře`}</MenuItem>
              </Select>
              <FormHelperText>{errors.type?.message}</FormHelperText>
            </FormControl>
          )}
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
