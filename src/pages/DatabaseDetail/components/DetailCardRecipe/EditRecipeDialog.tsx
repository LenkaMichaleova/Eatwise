import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

interface EditRecipeDialogProps {
  currentValue: string;
  onClose: () => void;
}

export const EditRecipeDialog = ({
  currentValue,
  onClose,
}: EditRecipeDialogProps) => {
  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle variant="h5" color="primary">{`Upravit recept`}</DialogTitle>

      <DialogContent>
        <TextField
          multiline
          rows={6}
          fullWidth
          placeholder="Zadejte recept..."
          value={currentValue}
          onChange={() => {}}
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
