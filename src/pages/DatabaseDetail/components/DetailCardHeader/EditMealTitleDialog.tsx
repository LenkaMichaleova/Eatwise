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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ title: string }>({
    defaultValues: {
      title: currentValue,
    },
  });

  const handleSave = ({ title }: { title: string }) => {
    updateMeal(mealId, { title: title.trim() });
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
          error={Boolean(errors.title)}
          helperText={errors.title?.message}
          {...register('title', {
            required: 'Název jídla je povinný',
            maxLength: {
              value: 30,
              message: 'Název jídla může mít maximálně 30 znaků',
            },
            validate: {
              hasNonNumericCharacter: (value) =>
                /\D/.test(value) ||
                'Název jídla musí obsahovat alespoň jeden nečíselný znak',
              notBlank: (value) =>
                value.trim().length > 0 || 'Název jídla je povinný',
            },
          })}
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
