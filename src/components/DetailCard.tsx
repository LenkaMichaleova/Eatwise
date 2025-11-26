import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import type { Food } from '../foodData';

export interface DetailCardProps {
  data: Food | undefined;
}

export const DetailCard = ({ data }: DetailCardProps) => {
  const food = data?.kjPerDay?.['6000'];

  return (
    <Card sx={{ width: '80vw', maxWidth: '500px', borderRadius: '5px' }}>
      <CardHeader title={data?.title} subheader={`${food?.calories} Kcal`} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1">
          Sacharidy: {food?.carbohydrates} g
        </Typography>
        <Typography variant="body1">Tuky: {food?.fats} g</Typography>
        <Typography variant="body1">Bílkoviny {food?.proteins} g</Typography>
      </CardContent>
    </Card>
  );
};
