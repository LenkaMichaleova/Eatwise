import { Link, useNavigate, useParams } from 'react-router-dom';
import { DetailCard } from './components/DetailCard';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ROUTES } from '../../constants/routes';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {
  DatabaseDetailErrorBoxStyled,
  DatabaseDetailHeaderStyled,
} from './styles/databaseDetailStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { DeleteConfirmDialog } from '../../components/Buttons/DeleteButton/DeleteConfirmDialog';
import { removeMeal, useMeals } from '../../services/mealsService';
import { getDailyKj } from '../../services/dailyKjService';
import { scaleMealToDailyKj } from '../../services/mealScalingService';

export const DatabaseDetail = () => {
  const { databaseId } = useParams<{ databaseId: string }>();
  const meals = useMeals();
  const foodItem = meals.find((food) => food.id === Number(databaseId));
  const scaledFoodItem = foodItem
    ? scaleMealToDailyKj(foodItem, getDailyKj())
    : null;
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!foodItem) {
      return;
    }

    const isRemoved = removeMeal(foodItem.id);
    if (isRemoved) {
      navigate(ROUTES.database);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <DatabaseDetailHeaderStyled>
        <Tooltip title="Zpět na databázi jídel" placement="right">
          <IconButton
            color="primary"
            component={Link}
            to={ROUTES.database}
            sx={{ margin: '2rem 0 0 0' }}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" color="primary">
            {`Detail jídla`}
          </Typography>
          <Tooltip title="Smazat jídlo" placement="left">
            <IconButton
              color="primary"
              onClick={() => setIsDeleteDialogOpen(true)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </DatabaseDetailHeaderStyled>

      {!foodItem && (
        <DatabaseDetailErrorBoxStyled>
          <Typography variant="h5" color="primary">
            {`Omlouváme se, položka nebyla nalezena.`}
          </Typography>
          <SentimentVeryDissatisfiedIcon
            color="primary"
            sx={{ fontSize: '4rem', marginLeft: 2 }}
          />
        </DatabaseDetailErrorBoxStyled>
      )}

      <Box sx={{ width: '100%', display: 'flex' }}>
        {foodItem && scaledFoodItem && (
          <Box sx={{ width: '100%', display: 'flex' }}>
            <DetailCard
              data={scaledFoodItem}
              baseIngredients={foodItem.ingredients}
            />
          </Box>
        )}
      </Box>

      {isDeleteDialogOpen && foodItem && (
        <DeleteConfirmDialog
          mealTitle={foodItem.title}
          onConfirm={handleDelete}
          onClose={() => setIsDeleteDialogOpen(false)}
        />
      )}
    </Box>
  );
};
