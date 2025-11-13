import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.4rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
    },
    h6: {
      fontSize: '0.5rem',
      '@media (min-width: 600px)': { fontSize: '0.7rem' },
      '@media (min-width: 960px)': { fontSize: '0.9rem' },
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
