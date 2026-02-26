import {
  Box,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { IconLabel } from '../../../components/IconLabel/IconLabel';
import { generatePath, Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  databaseMealCardActionAreaStyles,
  DatabaseMealCardStyled,
} from '../styles/mealCardStyles';
import type { Food } from '../../../models/food';
import { NutritionValueChip } from '../../../components/NutritionValueChip/NutritionValueChip';

interface DatabaseMealCardProps {
  data: Food;
}

export const DatabaseMealCard = ({ data }: DatabaseMealCardProps) => {
  const location = useLocation();
  const { id, title, type, calories, kj, proteins, carbohydrates, fats } = data;

  return (
    <DatabaseMealCardStyled variant="outlined">
      <CardActionArea
        component={Link}
        to={generatePath(ROUTES.databaseDetail, {
          databaseId: id.toString(),
        })}
        state={{
          from: `${location.pathname}${location.search}${location.hash}`,
        }}
        sx={databaseMealCardActionAreaStyles}
      >
        <CardHeader
          sx={{ width: '100%', alignSelf: 'start', display: 'flex' }}
          title={
            <Box>
              <Typography
                variant="subtitle1"
                color="primary"
                width="80%"
                gutterBottom
              >
                {title}
              </Typography>
              <Box sx={{ position: 'absolute', top: 15, right: 8 }}>
                <IconLabel type={type} />
              </Box>
            </Box>
          }
          subheader={
            <Typography
              variant="caption"
              color="grey.400"
            >{`${kj} kJ / ${calories} kcal`}</Typography>
          }
        />

        <CardContent sx={{ mt: -2, width: '100%' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 0.5 }}>
            <NutritionValueChip type="carbs" value={carbohydrates} />
            <NutritionValueChip type="fat" value={fats} />
            <NutritionValueChip type="protein" value={proteins} />
          </Box>
        </CardContent>
      </CardActionArea>
    </DatabaseMealCardStyled>
  );
};
