import { useState } from 'react';
import { generateDailyMenu } from '../utils/generateDailyMenu';
import { foodData } from '../../../foodData2';
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';
import { DailyMenuCard, DailyMenuMeals } from '../styles/dailyMenuStyles';

export const DailyMenu = () => {
  const [menu, setMenu] = useState(() => generateDailyMenu(foodData));

  return (
    <DailyMenuCard>
      <CardHeader
        title={
          <Typography variant="h4" color="primary">
            Pondělí
          </Typography>
        }
        sx={{ margin: '0 0 -2rem 0' }}
      />
      <CardContent>
        <Box sx={{ padding: '1rem 0' }}>
          {menu.meals.map((meal) => (
            <DailyMenuMeals key={meal.id}>
              <Typography variant="body2">{meal.title}</Typography>
              <Typography variant="body2" color="gray">
                ({meal.kj} kJ)
              </Typography>
            </DailyMenuMeals>
          ))}
        </Box>

        <Divider />

        <Box sx={{ padding: '1rem 0' }}>
          <Typography variant="h5">Celkem: {menu.totalKJ} kJ</Typography>
        </Box>

        <Button onClick={() => setMenu(generateDailyMenu(foodData))}>
          Vygenerovat nový jídelníček
        </Button>
      </CardContent>
    </DailyMenuCard>
  );
};
