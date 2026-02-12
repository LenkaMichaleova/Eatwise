import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomePageStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: theme.spacing(4, 'auto'),
  maxWidth: '1200px',
  width: '100%',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0,
  },
}));
