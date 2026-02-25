import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import {
  kjPerDayOptions,
  type KjPerDayValue,
} from '../../models/kjPerDayOptions';

interface KjPerDayFormProps {
  value: KjPerDayValue;
  onChange: (value: KjPerDayValue) => void;
}

export const KjPerDayForm = ({ value, onChange }: KjPerDayFormProps) => {
  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="kj-per-day-label">{`kJ/den`}</InputLabel>
      <Select
        labelId="kj-per-day-label"
        label="kJ/den"
        value={value}
        onChange={(event) => {
          const nextValue = Number(event.target.value) as KjPerDayValue;
          onChange(nextValue);
        }}
      >
        {kjPerDayOptions.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            <Typography variant="body1" color="textSecondary">
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
