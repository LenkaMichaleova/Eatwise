import { Box, CardContent, Divider } from '@mui/material';
import { NutritionValueChip } from '../../../components/NutritionValueChip/NutritionValueChip';
import type { Food } from '../../../models/food';
import type { FoodIngredient } from '../../../models/foodIngredient';
import { DetailCardHeader } from './DetailCardHeader/DetailCardHeader';
import {
  DetailCardContentBoxStyled,
  DetailCardStyled,
} from '../styles/detailCardStyles';
import { DetailCardRecipe } from './DetailCardRecipe/DetailCardRecipe';
import { DetailCardIngredients } from './DetailCardIngredients/DetailCardIngredients';

export interface DetailCardProps {
  data: Food;
  baseIngredients?: FoodIngredient[];
}

export const DetailCard = ({ data, baseIngredients }: DetailCardProps) => {
  const {
    id,
    title,
    type,
    calories,
    kj,
    carbohydrates,
    fats,
    proteins,
    ingredients,
    recipe,
  } = data;

  return (
    <DetailCardStyled variant="outlined">
      <DetailCardHeader
        mealId={id}
        title={title}
        calories={calories}
        kj={kj}
        type={type}
      />

      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <NutritionValueChip type="carbs" value={carbohydrates} />
          <NutritionValueChip type="fat" value={fats} />
          <NutritionValueChip type="protein" value={proteins} />
        </Box>

        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

        <DetailCardContentBoxStyled>
          <DetailCardIngredients
            mealId={id}
            ingredients={ingredients}
            baseIngredients={baseIngredients}
            baseDailyKj={data.baseDailyKj}
          />

          <DetailCardRecipe mealId={id} recipe={recipe} />
        </DetailCardContentBoxStyled>
      </CardContent>
    </DetailCardStyled>
  );
};
