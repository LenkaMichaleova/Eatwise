import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DatabaseStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  margin: theme.spacing(4, 'auto'),
  maxWidth: '1200px',
  width: '100%',
  gap: theme.spacing(2),
}));

export const DatabaseHeaderStylled = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const DatabaseContentStyled = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
  gridAutoRows: '1fr',
  width: '100%',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
