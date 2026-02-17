import { Box, CardContent, Divider } from '@mui/material';
import { NutritionValueChip } from '../../Database/components/NutritionValueChip';
import type { Food } from '../../../models/food';
import { DetailCardHeader } from './DetailCardHeader/DetailCardHeader';
import {
  DetailCardContentBoxStyled,
  DetailCardStyled,
} from '../styles/detailCardStyles';
import { DetailCardRecipe } from './DetailCardRecipe/DetailCardRecipe';
import { DetailCardIngredients } from './DetailCardIngredients/DetailCardIngredients';

export interface DetailCardProps {
  data: Food;
}

export const DetailCard = ({ data }: DetailCardProps) => {
  const { title, calories, kj, carbohydrates, fats, proteins, ingredients } =
    data;

  return (
    <DetailCardStyled variant="outlined">
      <DetailCardHeader title={title} calories={calories} kj={kj} />

      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <NutritionValueChip type="carbs" value={carbohydrates} />
          <NutritionValueChip type="fat" value={fats} />
          <NutritionValueChip type="protein" value={proteins} />
        </Box>

        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

        <DetailCardContentBoxStyled>
          <DetailCardIngredients ingredients={ingredients} />

          <DetailCardRecipe
            recipe={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores suscipit repellendus, atque quaerat doloribus omnis corrupti unde assumenda explicabo adipisci quas animi in nesciunt libero a illum, quos minus? Molestiae quas, ipsa quidem inventore earum porro consequatur ipsam sit nam nemo laboriosam a sed quia suscipit. Saepe unde harum incidunt, debitis natus eligendi animi illo, temporibus distinctio consequuntur earum vero perspiciatis aliquid, obcaecati qui quas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolore unde excepturi pariatur ducimus obcaecati aliquam cupiditate fuga modi maxime.`}
          />
        </DetailCardContentBoxStyled>
      </CardContent>
    </DetailCardStyled>
  );
};
