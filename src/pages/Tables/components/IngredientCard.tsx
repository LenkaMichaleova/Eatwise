import {
  Box,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import {
  ingredientCardActionAreaStyles,
  IngredientCardStyled,
} from '../styles/ingredientCardStyles';
import { NutritionValueChip } from '../../../components/NutritionValueChip/NutritionValueChip';
import type { Ingredient } from '../../../models/ingredient';

interface IngredientCardProps {
  data: Ingredient;
}

export const IngredientCard = ({ data }: IngredientCardProps) => {
  const { name, kcal, proteins, carbohydrates, fats } = data;

  return (
    <IngredientCardStyled variant="outlined">
      <CardActionArea sx={ingredientCardActionAreaStyles}>
        <CardHeader
          sx={{ width: '100%', alignSelf: 'start', display: 'flex' }}
          title={
            <Typography variant="body2" color="primary" width="80%">
              {name}
            </Typography>
          }
          subheader={
            <Typography
              variant="caption"
              color="grey.400"
            >{`${Math.round(kcal * 4.184)} kJ / ${kcal} kcal`}</Typography>
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
    </IngredientCardStyled>
  );
};
