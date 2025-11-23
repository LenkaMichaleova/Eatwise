import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router';
import { ROUTES } from '../../constants/routes';

const MenuStyled = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  margin: '2rem auto',
  maxWidth: '1200px',
  width: '100%',
  gap: '1rem',
});

export function Menu() {
  return (
    <MenuStyled>
      <Button component={Link} to={ROUTES.home}>
        Zpět
      </Button>
      <Typography variant="h2" color="primary">
        Jídelníček
      </Typography>
    </MenuStyled>
  );
}
