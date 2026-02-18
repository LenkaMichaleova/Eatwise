import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';

interface DeleteConfirmDialogProps {
  mealTitle?: string;
  readonly onClose: VoidFunction;
}

export const DeleteConfirmDialog = ({
  mealTitle,
  onClose,
}: DeleteConfirmDialogProps) => {
  const handleConfirm = () => {
    onClose();
  };

  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogContent>
        <Typography variant="body1">
          Opravdu chcete jídlo <strong>{mealTitle}</strong> smazat z databáze
          jídel?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{`Zavřít`}</Button>
        <Button variant="contained" onClick={handleConfirm}>
          {`Odstranit`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
