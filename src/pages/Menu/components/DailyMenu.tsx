import { useCallback, useState } from 'react';
import { generateDailyMenu } from '../utils/generateDailyMenu';
import { type Food } from '../../../foodData';
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';
import { DailyMenuCard, DailyMenuMeals } from '../styles/dailyMenuStyles';

export const DailyMenu = ({ data }: { data: Food[] }) => {
  const [menu, setMenu] = useState(() => generateDailyMenu(data));

  const handleGenerateMenu = useCallback(() => {
    setMenu(generateDailyMenu(data));
  }, [data]);

  return (
    <DailyMenuCard>
      <CardHeader
        title={
          <Typography variant="h4" color="primary">
            {`Pondělí`}
            {/*TODO: FYI check Luxon npm library (alternatively Day.js 
            or do your own research) or native Temporal API for work with dates. 
            regardless of the choice you will be able to work with dates easily 
            and format different date format etc*/}
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
                {`(${meal.kj} kJ)`}
              </Typography>
            </DailyMenuMeals>
          ))}
        </Box>

        <Divider />

        <Box sx={{ padding: '1rem 0' }}>
          <Typography variant="h5">{`Celkem: ${menu.totalKJ} kJ`}</Typography>
        </Box>

        <Button onClick={handleGenerateMenu} variant="contained" fullWidth>
          {`Vygenerovat nový jídelníček`}
        </Button>
      </CardContent>
    </DailyMenuCard>
  );
};
