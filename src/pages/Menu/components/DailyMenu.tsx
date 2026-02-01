import { useCallback, useEffect, useState } from 'react';
import { generateDailyMenu } from '../utils/generateDailyMenu';
import { type Food } from '../../../foodData';
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from '@mui/material';
import { DailyMenuCard, DailyMenuMeals } from '../styles/dailyMenuStyles';

export const DailyMenu = ({ data, day }: { data: Food[]; day: string }) => {
  const STORAGE_KEY = 'dailyMenu';
  type DailyMenuResult = ReturnType<typeof generateDailyMenu>;

  const isDailyMenuResult = (value: unknown): value is DailyMenuResult => {
    return (
      !!value &&
      typeof value === 'object' &&
      Array.isArray((value as DailyMenuResult).meals) &&
      typeof (value as DailyMenuResult).totalKJ === 'number'
    );
  };

  const loadSavedMenu = (): DailyMenuResult | null => {
    if (typeof window === 'undefined') return null;

    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return null;

    const parsed = JSON.parse(storedValue);

    if (isDailyMenuResult(parsed)) return parsed;

    return null;
  };

  const [menu, setMenu] = useState<DailyMenuResult>(() => {
    const savedMenu = loadSavedMenu();
    return savedMenu ?? generateDailyMenu(data);
  });

  const handleGenerateMenu = useCallback(() => {
    setMenu(generateDailyMenu(data));
  }, [data]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
    }
  }, [menu]);

  return (
    <DailyMenuCard variant="outlined">
      <CardHeader
        title={
          <Typography variant="h4" color="primary">
            {day}
            {/*TODO: FYI check Luxon npm library (alternatively Day.js 
            or do your own research) or native Temporal API for work with dates. 
            regardless of the choice you will be able to work with dates easily 
            and format different date format etc*/}
          </Typography>
        }
        sx={{ margin: '0 0 -2rem 0' }}
      />
      <CardContent>
        <Box
          sx={{
            padding: '1rem 0',
            gap: '0.2rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {menu.meals.map((meal) => (
            <DailyMenuMeals key={meal.id}>
              <Paper
                variant="outlined"
                elevation={3}
                sx={{
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  gap: '1rem',
                }}
              >
                <Typography variant="caption">{meal.title}</Typography>
                <Typography
                  variant="caption"
                  color="gray"
                  sx={{ flexShrink: 0 }}
                >
                  {`(${meal.kj} kJ)`}
                </Typography>
              </Paper>
            </DailyMenuMeals>
          ))}
        </Box>

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
