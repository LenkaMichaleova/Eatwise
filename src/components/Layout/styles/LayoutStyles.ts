import { styled } from '@mui/material/styles';
import bg from '../../../assets/background.png';

export const LayoutStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  backgroundImage: `url(${bg})`,
  backgroundPosition: 'top',
  backgroundRepeat: 'repeat',
  backgroundSize: '120%',
  '@media(min-width: 600px)': {
    backgroundSize: '80%',
  },
  '@media(min-width: 960px)': {
    backgroundSize: '50%',
  },
});

export const HeaderStyled = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
  width: '100%',
  margin: '0 auto',
  padding: '0.5rem 1rem',
  '@media(min-width:960px)': { padding: '0 10rem' },
}));

export const LogoStyled = styled('img')(() => ({
  width: 50,
  '@media (min-width: 600px)': { width: 60 },
  '@media (min-width: 960px)': { width: 70 },
}));

export const FooterStyled = styled('footer')(({ theme }) => ({
  display: 'block',
  backgroundColor: theme.palette.secondary.light,
  bottom: 0,
  width: '100%',
  textAlign: 'center',
}));
