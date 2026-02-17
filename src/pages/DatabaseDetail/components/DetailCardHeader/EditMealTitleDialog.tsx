import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

interface EditMealTitleDialogProps {
  currentValue: string;
  onClose: () => void;
}

export const EditMealTitleDialog = ({
  currentValue,
  onClose,
}: EditMealTitleDialogProps) => {
  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle
        variant="h5"
        color="primary"
      >{`Změna názvu jídla`}</DialogTitle>

      <DialogContent>
        <TextField fullWidth value={currentValue} onChange={() => {}} />
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
