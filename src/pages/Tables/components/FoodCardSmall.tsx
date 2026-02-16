import { CardActionArea, Typography } from '@mui/material';
import type { Ingredient } from '../../../models/ingredient';
import {
  FoodCardActionStyles,
  FoodCardCalolriesStyles,
  FoodCardSmallStyled,
  FoodCardTitleStyles,
} from '../styles/FoodCardSmallStyles';

interface FoodCardProps {
  row: Ingredient;
}

export const FoodCardSmall = ({ row }: FoodCardProps) => {
  return (
    <FoodCardSmallStyled>
      <CardActionArea sx={FoodCardActionStyles}>
        <Typography variant="body2" sx={FoodCardTitleStyles}>
          {row.name}
        </Typography>
        <Typography variant="h6" sx={FoodCardCalolriesStyles}>
          {`${row.kcal} KCal`}
        </Typography>
      </CardActionArea>
    </FoodCardSmallStyled>
  );
};
