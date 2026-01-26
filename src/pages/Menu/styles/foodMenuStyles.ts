import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FoodMenuStyled = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  margin: '2rem auto',
  maxWidth: '1200px',
  width: '100%',
  gap: '1rem',
});

export const FoodMenuHeaderStylled = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});
