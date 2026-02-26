import CircularProgress from '@mui/material/CircularProgress';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import type { mealData } from '../../../models/mealData';
import { NutritionValueChip } from '../../Database/components/NutritionValueChip';

export interface MealCardProps {
  data: mealData | undefined;
  image: string | null;
  loading: boolean;
  error?: Error | null;
}

export const MealCard = ({ data, image, loading, error }: MealCardProps) => {
  if (!image) {
    return null;
  }
  return (
    <Card
      variant="outlined"
      sx={{
        width: '80vw',
        maxWidth: '400px',
        borderRadius: 2,
        mt: 1.5,
        boxShadow: 3,
      }}
    >
      <CardMedia component="img" src={image} alt="Paella dish" width={100} />
      <CardHeader
        title={
          <Typography variant="h3" color="primary" gutterBottom>
            {data?.name}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle2" color="grey.500">
            {data?.value ? `${data.value} kcal` : undefined}
            {data?.kjValue ? ` / ${data.kjValue} kJ` : undefined}
          </Typography>
        }
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {data && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <NutritionValueChip type="carbs" value={data?.carbohydrates} />
            <NutritionValueChip type="fat" value={data?.fats} />
            <NutritionValueChip type="protein" value={data?.proteins} />
          </Box>
        )}

        <Typography variant="body2"> {data?.description}</Typography>

        {loading && <CircularProgress />}

        {error && <Typography variant="body2">{error.message}</Typography>}
      </CardContent>
    </Card>
  );
};
