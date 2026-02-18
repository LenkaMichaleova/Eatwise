import { Box, Chip, styled } from '@mui/material';

export const IngredientsBoxStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    width: '75%',
  },
  [theme.breakpoints.up('md')]: {
    width: '48%',
  },
  '&:hover .add-button': {
    opacity: 1,
    pointerEvents: 'auto',
  },
}));

export const IngredientBoxHeaderStyled = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const IngredientChipStyled = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  height: 'auto',
  borderColor: theme.palette.grey[300],
  color: theme.palette.text.primary,
  '& .MuiChip-label': {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    whiteSpace: 'normal',
  },
  '& .MuiChip-deleteIcon': {
    opacity: 0,
    transition: 'opacity 0.2s ease',
    alignSelf: 'center',
  },
  '&:hover .MuiChip-deleteIcon': {
    opacity: 1,
  },
  '&:hover': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    transform: 'scale(1.003)',
  },
}));

export const IngredientChipLabelStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(1),
  width: '100%',
}));
