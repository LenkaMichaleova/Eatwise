import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      padding: '2% 5%',
      color: 'white',
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#6EC6A8',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});