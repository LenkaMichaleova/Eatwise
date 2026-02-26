import { Card, styled } from '@mui/material';

export const IngredientCardStyled = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '270px',
  alignSelf: 'center',
  [theme.breakpoints.up('xs')]: {
    maxWidth: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    height: '100%',
  },
}));

export const ingredientCardActionAreaStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
};
