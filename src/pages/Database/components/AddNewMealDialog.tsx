import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from '@mui/material';
import { AddNewMealForm } from './AddNewMealForm';

export const AddNewMealDialog = ({ onClose }: { onClose: VoidFunction }) => {
  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      open={true}
      onClose={(_, reason) => reason !== 'backdropClick' && onClose()}
    >
      <DialogTitle variant="h3" color="primary.main">
        {`Založení nového jídla`}
      </DialogTitle>
      <Divider />

      <DialogContent>
        <AddNewMealForm onClose={onClose} />
      </DialogContent>

      <DialogActions sx={{ padding: '0 3rem 1rem 2rem' }}>
        <Button onClick={onClose}>{`Zavřít`}</Button>
        <Button
          variant="contained"
          type="submit"
          form="add-new-meal-form"
          sx={{ color: 'white' }}
        >
          {`Přidat jídlo`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
