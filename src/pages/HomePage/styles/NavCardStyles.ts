import { Card, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardStyled = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  margin: theme.spacing(2),
  textAlign: 'center',
  boxShadow: '0 0 10px 0 rgba(0,0,0,0.05)',
  borderRadius: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
  [theme.breakpoints.up('md')]: {
    width: '42%',
  },

  '&:hover': {
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
    borderColor: theme.palette.primary.main,
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
  [theme.breakpoints.up('sm')]: {
    height: '20vh',
  },
  [theme.breakpoints.up('md')]: {
    height: '25vh',
  },
}));
