import { Box, Container, Typography } from '@mui/material';
import { HeaderStyled, LogoStyled } from './styles/LayoutStyles';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Link
          to={ROUTES.home}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <LogoStyled src={logo} alt="Logo" />
          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}
          >
            <Typography variant="h1">Eatwise</Typography>
            <Typography variant="h6" color="grey.300">
              Verze: {import.meta.env.VITE_APP_VERSION}
            </Typography>
          </Box>
        </Link>
      </Container>
    </HeaderStyled>
  );
}
