import { Card, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardStyled = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  margin: '0 1rem 1rem 1rem',
  opacity: '60%',
  textAlign: 'center',
  '@media(min-width: 960px)': {
    width: '42%',
  },
  '&:hover': {
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
    borderColor: theme.palette.primary.main,
    opacity: '100%',
  },
  '&:active': {
    transform: 'translateY(-1px) scale(0.98)',
    boxShadow: 1,
    backgroundColor: theme.palette.secondary.light,
  },
}));

export const CardHeaderStyled = styled(CardHeader)(({ theme }) => ({
  color: theme.palette.primary.main,
  alignContent: 'center',
  height: '15vh',
  '@media(min-width: 600px)': {
    height: '20vh',
  },
  '@media(min-width: 960px)': {
    height: '25vh',
  },
}));
