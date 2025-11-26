import { CardActionArea, Typography } from '@mui/material';
import type { CalTablesRow } from '../models/CalTableRow';
import {
  FoodCardActionStyles,
  FoodCardCalolriesStyles,
  FoodCardSmallStyled,
  FoodCardTitleStyles,
} from '../styles/FoodCardSmallStyles';

interface FoodCardProps {
  row: CalTablesRow;
}

export const FoodCardSmall = ({ row }: FoodCardProps) => {
  return (
    <FoodCardSmallStyled>
      <CardActionArea sx={FoodCardActionStyles}>
        <Typography variant="body2" sx={FoodCardTitleStyles}>
          {row.OrigFdNm}
        </Typography>
        <Typography variant="h6" sx={FoodCardCalolriesStyles}>
          {row.ENERC} KCal
        </Typography>
      </CardActionArea>
    </FoodCardSmallStyled>
  );
};
