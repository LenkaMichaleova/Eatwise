import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '1.4rem',
      '@media (min-width:600px)': {
        fontSize: '1.7rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
    },
    h6: {
      fontSize: '0.7rem',
      '@media (min-width: 600px)': { fontSize: '0.8rem' },
      '@media (min-width: 960px)': { fontSize: '0.9rem' },
    },
    body1: {
      fontSize: '0.9rem',
      '@media (min-width: 600px)': { fontSize: '1rem' },
      '@media (min-width: 960px)': { fontSize: '1.1rem' },
    },
    body2: {
      fontSize: '0.8rem',
      '@media (min-width: 600px)': { fontSize: '0.9rem' },
      '@media (min-width: 960px)': { fontSize: '1rem' },
    },
  },
  palette: {
    primary: {
      main: '#6EC6A8',
    },
    secondary: {
      main: '#F0F0F0',
    },
  },
});

export const theme = createTheme(mainTheme, {
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: mainTheme.palette.grey[50],
          color: mainTheme.palette.primary.main,
          border: `1px solid ${mainTheme.palette.grey[300]}`,
          boxShadow: mainTheme.shadows[3],
          padding: '0.5rem 1rem',
          fontSize: '0.9rem',
          borderRadius: '8px',
          '@media(max-width: 350px)': {
            maxWidth: '120px',
          },
        },
      },
    },
  },
});
