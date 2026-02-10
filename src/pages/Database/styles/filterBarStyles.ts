import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const FilterBarStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifySelf: 'center',
    maxWidth: '270px',
    width: '100%',
    padding: theme.spacing(0, 5, 0, 0),
  },
}));
