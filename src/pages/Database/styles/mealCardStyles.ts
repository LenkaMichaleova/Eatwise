import { Card, styled } from '@mui/material';

export const DatabaseMealCardStyled = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: '270px',
  alignSelf: 'center',
  [theme.breakpoints.up('sm')]: {
    maxWidth: 'none',
  },
}));

export const databaseMealCardActionAreaStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
};
