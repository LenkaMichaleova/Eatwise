import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FoodMenuStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: theme.spacing(4, 'auto'),
  width: '100%',
  gap: theme.spacing(2),
}));

export const FoodMenuHeaderStyled = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const FoodMenuCalendarStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

export const FoodMenuContentStyled = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(4),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));
