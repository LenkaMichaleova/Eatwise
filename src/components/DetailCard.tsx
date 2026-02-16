import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import type { Food } from '../models/food';

export interface DetailCardProps {
  data: Food | undefined;
}

export const DetailCard = ({ data }: DetailCardProps) => {
  if (!data) {
    return null;
  }

  return (
    <Card sx={{ width: '80vw', maxWidth: '500px', borderRadius: '5px' }}>
      <CardHeader title={data.title} subheader={`${data.calories} Kcal`} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1">
          Sacharidy: {data.carbohydrates} g
        </Typography>
        <Typography variant="body1">Tuky: {data.fats} g</Typography>
        <Typography variant="body1">Bílkoviny {data.proteins} g</Typography>
      </CardContent>
    </Card>
  );
};
