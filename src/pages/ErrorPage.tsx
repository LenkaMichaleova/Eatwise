import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router';
import { ROUTES } from '../routes';

const ErrorPageStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  margin: '5rem 2rem',
  gap: 1,
});

export function ErrorPage() {
  return (
    <ErrorPageStyled>
      <Typography variant="h2" color="primary" fontWeight="bold">
        404
      </Typography>
      <Typography variant="h5">Stránka nebyla nalezena</Typography>
      <Typography variant="body1">
        Omlouváme se, ale stránka, kterou hledáte, neexistuje.
      </Typography>
      <Button
        component={Link}
        to={ROUTES.home}
        variant="outlined"
        color="primary"
        sx={{ margin: '1rem', padding: '1rem' }}
      >
        Zpět na hlavní stránku
      </Button>
    </ErrorPageStyled>
  );
}
