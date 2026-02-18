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

export const AddDetailIngredientDialog = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  const ingredients = getAllIngredients();
  const [amount, setAmount] = useState(1);

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
          value=""
          onChange={() => {}}
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
        <Button variant="contained" onClick={onClose} sx={{ color: 'white' }}>
          {`Uložit`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
