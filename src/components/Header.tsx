import { Box, Typography } from '@mui/material';

const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  bgcolor: 'primary.main',
  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
  width: '100%',
  margin: '0 auto',
  padding: '1% 5%',
  '@media(min-width:960px)': { padding: '0 5%' },
};

export function Header() {
  return (
    <Box component="header" sx={headerStyles}>
      <Box
        component="img"
        src="../public/vite.svg"
        alt="Logo"
        sx={{
          color: 'white',
          width: 40,
          '@media (min-width: 600px)': { width: 60 },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '2%',
          '@media(min-width:960px)': { padding: '1% 4%' },
        }}
      >
        <Typography variant="h1">Eatwise</Typography>
        <Typography variant="h6" color="grey.300">
          Verze: {import.meta.env.VITE_APP_VERSION}
        </Typography>
      </Box>
    </Box>
  );
}
