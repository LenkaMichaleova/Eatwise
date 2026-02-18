import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from '@mui/material';

interface EditMealTypeDialogProps {
  currentValue: string;
  onClose: () => void;
}

export const EditMealTypeDialog = ({
  currentValue,
  onClose,
}: EditMealTypeDialogProps) => {
  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle
        variant="h5"
        color="primary"
      >{`Změna typu jídla`}</DialogTitle>

      <DialogContent>
        <Select fullWidth value={currentValue} onChange={() => {}}>
          <MenuItem value="breakfast">{`Snídaně`}</MenuItem>
          <MenuItem value="snack1">{`Svačina 1`}</MenuItem>
          <MenuItem value="lunch">{`Oběd`}</MenuItem>
          <MenuItem value="snack2">{`Svačina 2`}</MenuItem>
          <MenuItem value="dinner">{`Večeře`}</MenuItem>
        </Select>
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
