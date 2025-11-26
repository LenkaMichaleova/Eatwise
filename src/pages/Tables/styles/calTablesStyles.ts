import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CalTablesStyled = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  margin: '2rem auto',
  maxWidth: '1200px',
  width: '100%',
  gap: '1rem',
});

export const CalTablesHeaderStylled = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const CalTablesBoxSmallStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
