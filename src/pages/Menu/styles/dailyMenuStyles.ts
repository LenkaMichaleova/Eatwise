import { Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DailyMenuCard = styled(Card)({
  padding: '1rem',
  minWidth: '500px',
  '@media (max-width: 600px)': { minWidth: '0' },
});

export const DailyMenuMeals = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
});
