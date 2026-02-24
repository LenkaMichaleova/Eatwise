import { Box, styled } from '@mui/material';

export const AddNewMealFormStyled = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 1),
  [theme.breakpoints.up('sm')]: { padding: theme.spacing(2, 3) },
}));

export const NewMealIngredientsBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.grey[700],
  border: '1px solid',
  borderColor: theme.palette.grey[400],
  borderRadius: theme.shape.borderRadius,
  padding: '0.5rem 1rem',
  marginBottom: theme.spacing(2),
  '&:hover .add-button': {
    opacity: 1,
  },
}));

export const NewMealIngredientsHeaderStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const NewMealIngredientsContentStyled = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gap: '0.5rem',
});
