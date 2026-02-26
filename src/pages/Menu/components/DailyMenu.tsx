import { useCallback, useState } from 'react';
import { generateDailyMenu } from '../utils/generateDailyMenu';
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
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
import { formatWeekday, formatDate } from '../../../utils/dateUtils';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { ChangeOneMealDialog } from './ChangeOneMealDialog';
import type { Food } from '../../../models/food';
import { getReplacementMealsByType } from '../utils/mealReplacement';
import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

type DailyMenuResult = ReturnType<typeof generateDailyMenu>;

interface DailyMenuProps {
  date: Dayjs;
  menu: DailyMenuResult;
  onMenuChange: () => void;
  allMeals: Food[];
  onMealReplace: (currentMealId: number, nextMealId: number) => void;
}

export const DailyMenu = ({
  date,
  menu,
  onMenuChange,
  allMeals,
  onMealReplace,
}: DailyMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleGenerateMenu = useCallback(() => {
    onMenuChange();
  }, [onMenuChange]);
  const [mealToChange, setMealToChange] = useState<Food | null>(null);

  const replacementMeals = mealToChange
    ? getReplacementMealsByType(mealToChange, allMeals)
    : [];

  return (
    <DailyMenuCard>
      <CardHeader
        title={
          <Box>
            <Typography variant="h5" color="primary">
              {formatWeekday(date)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDate(date)}
            </Typography>
          </Box>
        }
        sx={{ margin: '0 0 -2rem 0' }}
      />
      <CardContent>
        <DailyMenuMealsBox>
          {menu.meals.map((meal) => (
            <DailyMenuMealPaper
              key={meal.id}
              variant="outlined"
              elevation={3}
              sx={{ cursor: 'pointer', '&:hover': { boxShadow: 2 } }}
              onClick={() =>
                navigate(
                  generatePath(ROUTES.databaseDetail, {
                    databaseId: meal.id.toString(),
                  }),
                  {
                    state: {
                      from: `${location.pathname}${location.search}${location.hash}`,
                    },
                  }
                )
              }
            >
              <Box display="flex" alignItems="center" gap={1}>
                <IconLabel type={meal.type} />
                <Typography variant="caption">{meal.title}</Typography>
              </Box>
              <DailyMenuMealKjBox>
                <Typography
                  variant="caption"
                  color="grey.500"
                  sx={{ flexShrink: 0, ml: 1 }}
                >
                  {`(${meal.kj} kJ)`}
                </Typography>
                <Tooltip title="Změnit jídlo" placement="bottom">
                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      setMealToChange(meal);
                    }}
                  >
                    <ChangeCircleIcon color="primary" fontSize="small" />
                  </IconButton>
                </Tooltip>
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

      {mealToChange && (
        <ChangeOneMealDialog
          onClose={() => setMealToChange(null)}
          currentMeal={mealToChange}
          replacementMeals={replacementMeals}
          onSave={(nextMealId) => {
            onMealReplace(mealToChange.id, nextMealId);
            setMealToChange(null);
          }}
        />
      )}
    </DailyMenuCard>
  );
};
