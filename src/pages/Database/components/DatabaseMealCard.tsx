import {
  Box,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { IconLabel } from '../../../components/IconLabel/IconLabel';
import { generatePath, Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import {
  databaseMealCardActionAreaStyles,
  DatabaseMealCardStyled,
} from '../styles/mealCardStyles';
import type { Meal } from '../../../models/meal';
import { NutritionValueChip } from './NutritionValueChip';

interface DatabaseMealCardProps {
  data: Meal;
}

export const DatabaseMealCard = ({ data }: DatabaseMealCardProps) => {
  const { id, title, type, calories, kj, proteins, carbohydrates, fats } = data;

  return (
    <DatabaseMealCardStyled variant="outlined">
      <CardActionArea
        component={Link}
        to={generatePath(ROUTES.databaseDetail, {
          databaseId: id.toString(),
        })}
        sx={databaseMealCardActionAreaStyles}
      >
        <CardHeader
          sx={{ width: '100%', alignSelf: 'start', display: 'flex' }}
          title={
            <Box>
              <Typography
                variant="body2"
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
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <NutritionValueChip type="protein" value={proteins} />
            <NutritionValueChip type="carbs" value={carbohydrates} />
            <NutritionValueChip type="fat" value={fats} />
          </Box>
        </CardContent>
      </CardActionArea>
    </DatabaseMealCardStyled>
  );
};
