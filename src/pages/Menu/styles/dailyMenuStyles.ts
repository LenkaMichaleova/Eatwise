import { Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DailyMenuCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  width: '100%',
}));

export const DailyMenuMeals = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}));
