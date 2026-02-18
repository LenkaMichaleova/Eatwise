import { IconButton, styled } from '@mui/material';

export const ButtonStyled = styled(IconButton)(({ theme }) => ({
  opacity: 0,
  transition: 'opacity 0.2s',
  marginLeft: theme.spacing(1),
}));
