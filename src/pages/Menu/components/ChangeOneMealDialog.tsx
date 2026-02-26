import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import type { Food } from '../../../models/food';

interface ChangeOneMealDialogProps {
  onClose: VoidFunction;
  currentMeal: Food;
  replacementMeals: Food[];
  onSave: (mealId: number) => void;
}

export const ChangeOneMealDialog = ({
  onClose,
  currentMeal,
  replacementMeals,
  onSave,
}: ChangeOneMealDialogProps) => {
  const [selectedMeal, setSelectedMeal] = useState<Food | null>(
    replacementMeals[0] ?? null
  );

  useEffect(() => {
    setSelectedMeal(replacementMeals[0] ?? null);
  }, [currentMeal.id, replacementMeals]);

  return (
    <Dialog fullWidth open onClose={onClose}>
      <DialogTitle variant="h5" color="primary.main">
        {`Změna jídla`}
      </DialogTitle>

      <DialogContent>
        <Typography gutterBottom variant="body1" color="grey.500">
          {`Aktuální jídlo: ${currentMeal.title}`}
        </Typography>
        <FormControl fullWidth>
          <Autocomplete
            options={replacementMeals}
            getOptionLabel={(option) => option.title}
            value={selectedMeal}
            onChange={(_, value) => setSelectedMeal(value)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            noOptionsText={`Žádné dostupné jídlo`}
            renderInput={(params) => (
              <TextField {...params} label={`Nové jídlo`} fullWidth />
            )}
            sx={{ mt: 2 }}
          />
        </FormControl>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{`Zrušit`}</Button>
        <Button
          variant="contained"
          onClick={() => selectedMeal && onSave(selectedMeal.id)}
          sx={{ color: 'white' }}
          disabled={!selectedMeal}
        >
          {`Uložit změny`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
