import { Box, Container, Typography } from '@mui/material';
import { HeaderStyled, LogoStyled } from './LayoutStyles';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <HeaderStyled>
      <Container sx={{ display: 'flex' }}>
        <LogoStyled src={logo} alt="Logo" />
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
          <Typography variant="h1">Eatwise</Typography>
          <Typography variant="h6" color="grey.300">
            Verze: {import.meta.env.VITE_APP_VERSION}
          </Typography>
        </Box>
      </Container>
    </HeaderStyled>
  );
}
