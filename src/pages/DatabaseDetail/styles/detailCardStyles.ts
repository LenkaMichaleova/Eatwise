import { Box, Card, styled } from '@mui/material';

export const DetailCardStyled = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  borderRadius: '5px',
  marginBottom: theme.spacing(4),
}));

export const DetailCardHeaderStyled = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
}));

export const DetailCardContentBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
}));
