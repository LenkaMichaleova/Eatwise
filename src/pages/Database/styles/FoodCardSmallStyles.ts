import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FoodCardSmallStyled = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '3rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  textDecoration: 'none',
  margin: '0.2rem 1rem',
  padding: '1rem',
  '&:hover': {
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
    borderColor: theme.palette.primary.main,
    opacity: '100%',
  },
  '&:active': {
    transform: 'translateY(-1px) scale(0.98)',
    borderColor: theme.palette.primary.main,
    boxShadow: 1,
  },
}));

export const FoodCardActionStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
  width: '100%',
};

export const FoodCardTitleStyles = {
  width: '80%',
  paddingLeft: '1rem',
};

export const FoodCardCalolriesStyles = {
  width: '20%',
  textAlign: 'right',
  color: 'grey',
  paddingRight: '1rem',
};