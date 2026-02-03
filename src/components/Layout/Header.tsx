import { Box, Container } from '@mui/material';
import { HeaderStyled } from './styles/LayoutStyles';
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
          <Box component="img" src={logo} alt="Logo" width={200} />
        </Link>
      </Container>
    </HeaderStyled>
  );
}
