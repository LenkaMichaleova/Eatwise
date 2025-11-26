import CircularProgress from '@mui/material/CircularProgress';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import type { mealData } from '../models/mealData';

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
    <Card sx={{ width: '80vw', maxWidth: '350px', borderRadius: '5px' }}>
      <CardMedia component="img" src={image} alt="Paella dish" width={100} />
      <CardHeader
        title={data?.name}
        subheader={data?.value ? `${data.value} kcal` : undefined}
      />
      <CardContent sx={{ display: 'flex' }}>
        <Typography variant="body1"> {data?.description}</Typography>
        {loading && <CircularProgress />}
        {error && <Typography variant="body1">{error.message}</Typography>}
      </CardContent>
    </Card>
  );
};
