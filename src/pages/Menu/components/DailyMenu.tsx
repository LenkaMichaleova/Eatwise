import { useCallback } from 'react';
import { generateDailyMenu } from '../utils/generateDailyMenu';
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  // IconButton,
  // Tooltip,
  Typography,
} from '@mui/material';
import {
  DailyMenuCard,
  DailyMenuMealKjBox,
  DailyMenuMealPaper,
  DailyMenuMealsBox,
} from '../styles/dailyMenuStyles';
import { IconLabel } from '../../../components/IconLabel/IconLabel';
import type { Dayjs } from 'dayjs';
// import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

type DailyMenuResult = ReturnType<typeof generateDailyMenu>;

interface DailyMenuProps {
  day: string;
  date: Dayjs;
  menu: DailyMenuResult;
  onMenuChange: () => void;
}

export const DailyMenu = ({
  day,
  date,
  menu,
  onMenuChange,
}: DailyMenuProps) => {
  const handleGenerateMenu = useCallback(() => {
    onMenuChange();
  }, [onMenuChange]);

  return (
    <DailyMenuCard>
      <CardHeader
        title={
          <Box>
            <Typography variant="h5" color="primary">
              {day}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date.format('DD.MM.YYYY')}
            </Typography>
          </Box>
        }
        sx={{ margin: '0 0 -2rem 0' }}
      />
      <CardContent>
        <DailyMenuMealsBox>
          {menu.meals.map((meal) => (
            <DailyMenuMealPaper key={meal.id} variant="outlined" elevation={3}>
              <Box display="flex" alignItems="center" gap={1}>
                <IconLabel type={meal.type} />
                <Typography variant="caption">{meal.title}</Typography>
              </Box>
              <DailyMenuMealKjBox>
                <Typography
                  variant="caption"
                  color="grey.500"
                  sx={{ flexShrink: 0 }}
                >
                  {`(${meal.kj} kJ)`}
                </Typography>
                {/* <Tooltip title="Změnit jídlo" placement="bottom">
                    <IconButton>
                      <ChangeCircleIcon color="primary" />
                    </IconButton>
                  </Tooltip> */}
              </DailyMenuMealKjBox>
            </DailyMenuMealPaper>
          ))}
        </DailyMenuMealsBox>

        <Box sx={{ padding: '1rem 0' }}>
          <Typography variant="body1">{`Celkem: ${menu.totalKJ} kJ`}</Typography>
        </Box>

        <Button onClick={handleGenerateMenu} variant="contained" fullWidth>
          {`Vygenerovat nový jídelníček`}
        </Button>
      </CardContent>
    </DailyMenuCard>
  );
};
