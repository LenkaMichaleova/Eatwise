import { CardActionArea, Typography } from '@mui/material';
import { generatePath, Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import type { Row } from '../models/row';
import {
  FoodCardActionStyles,
  FoodCardCalolriesStyles,
  FoodCardSmallStyled,
  FoodCardTitleStyles,
} from '../styles/FoodCardSmallStyles';

interface FoodCardProps {
  row: Row;
}

export const FoodCardSmall = ({ row }: FoodCardProps) => {
  return (
    <FoodCardSmallStyled>
      <CardActionArea
        component={Link}
        to={generatePath(ROUTES.databaseDetail, {
          databaseId: row.id.toString(),
        })}
        sx={FoodCardActionStyles}
      >
        <Typography variant="body1" sx={FoodCardTitleStyles}>
          {row.name}
        </Typography>
        <Typography variant="body2" sx={FoodCardCalolriesStyles}>
          {row.calories} KCal
        </Typography>
      </CardActionArea>
    </FoodCardSmallStyled>
  );
};
