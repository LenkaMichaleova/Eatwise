import { Box, Card, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DailyMenuCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  width: '100%',
}));

export const DailyMenuMealsBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  gap: theme.spacing(0.5),
  display: 'flex',
  flexDirection: 'column',
}));

export const DailyMenuMealPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0.5),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(2),
}));

export const DailyMenuMealKjBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexShrink: theme.spacing(0),
}));
