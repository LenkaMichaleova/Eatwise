import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router';
import { ROUTES } from '../../routes';

const TablesStyled = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  margin: '2rem auto',
  maxWidth: '1200px',
  width: '100%',
  gap: '1rem',
});

export function Tables() {
  return (
    <TablesStyled>
      <Button component={Link} to={ROUTES.home}>
        Zpět
      </Button>
      <Typography variant="h2" color="primary">
        Kalorické tabulky
      </Typography>
    </TablesStyled>
  );
}
