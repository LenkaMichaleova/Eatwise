import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constants/routes';

interface DeleteConfirmDialogProps {
  mealTitle?: string;
  readonly onClose: () => void;
}

export const DeleteConfirmDialog = ({
  mealTitle,
  onClose,
}: DeleteConfirmDialogProps) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onClose();
    navigate(ROUTES.database);
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
