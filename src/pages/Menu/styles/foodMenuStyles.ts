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

export const FoodMenuHeaderStylled = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const FoodMenuContentStylled = styled(Box)(({ theme }) => ({
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
