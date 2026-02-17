import { Box, styled } from '@mui/material';

export const SearchBarBoxStyled = styled(Box)(({ theme }) => ({
  width: '50%',
  marginTop: theme.spacing(2),
  gap: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'center',
    width: '100%',
  },
}));

export const SearchBarStyled = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    maxWidth: '270px',
    width: '100%',
    alignSelf: 'center',
  },
}));
