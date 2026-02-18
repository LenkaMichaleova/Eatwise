import { Box, styled } from '@mui/material';

export const DetailCardRecipeBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '48%',
  },
}));

export const RecipeBoxHeaderStyled = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});
