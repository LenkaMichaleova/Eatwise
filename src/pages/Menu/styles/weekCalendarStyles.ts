import { Box, styled } from '@mui/material';

export const WeekCalendarHeaderStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mb: theme.spacing(2),
}));
