import { Chip, styled } from '@mui/material';

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
