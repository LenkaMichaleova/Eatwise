import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router';

export function ErrorPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      margin="5rem 2rem"
      gap={1}
    >
      <Typography variant="h2" color="primary" fontWeight="bold">
        404
      </Typography>
      <Typography variant="h5">Stránka nebyla nalezena</Typography>
      <Typography variant="body1">
        Omlouváme se, ale stránka, kterou hledáte, neexistuje.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="outlined"
        color="primary"
        sx={{ margin: '1%', padding: '1%' }}
      >
        Zpět na hlavní stránku
      </Button>
    </Box>
  );
}
