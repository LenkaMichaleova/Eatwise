import { Box, styled } from '@mui/material';

export const DatabaseDetailHeaderStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

export const DatabaseDetailErrorBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  padding: `0 ${theme.spacing(1)}`,
  textAlign: 'center',
}));

export const EditableBoxStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  '&:hover .editButton': {
    opacity: 1,
  },
  '&.touch-active .editButton': {
    opacity: 1,
  },
});
