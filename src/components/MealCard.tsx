import type { mealData } from '../models/mealData';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

export interface MealCardProps {
  data: mealData;
  image: string | null;
  loading: boolean;
  error?: string;
}

export const MealCard = ({ data, image, loading, error }: MealCardProps) => {
  if (!image) {
    return null;
  }
  return (
    <Card sx={{ width: '80vw', maxWidth: '350px', borderRadius: '5px' }}>
      {image && (
        <CardMedia component="img" src={image} alt="Paella dish" width={100} />
      )}
      <CardHeader
        title={data.name}
        subheader={data.value ? `${data.value} KCal` : undefined}
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body1"> {data.description}</Typography>
        {loading && <CircularProgress />}
        {error && <p>{error}</p>}
      </CardContent>
    </Card>
  );
};
