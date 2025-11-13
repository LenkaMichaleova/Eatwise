import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.png'

const HeaderStyled = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
  width: '100%',
  margin: '0 auto',
  padding: '0.5rem 1rem',
  '@media(min-width:960px)': { padding: '0 10rem' },
}));

const LogoStyled = styled('img')(() => ({
  width: 50,
  '@media (min-width: 600px)': { width: 60 },
  '@media (min-width: 960px)': { width: 70 },
}));

export function Header() {
  return (
    <HeaderStyled>
      <LogoStyled src={logo} alt="Logo" />
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
        <Typography variant="h1">Eatwise</Typography>
        <Typography variant="h6" color="grey.300">
          Verze: {import.meta.env.VITE_APP_VERSION}
        </Typography>
      </Box>
    </HeaderStyled>
  );
}
