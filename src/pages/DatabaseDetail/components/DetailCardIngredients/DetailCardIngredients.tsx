import { Box, Paper, Typography } from '@mui/material';
import { getIngredientNameById } from '../../../../services/ingredientsService';
import type { FoodIngredient } from '../../../../models/foodIngredient';
import { AddButton } from '../../../../components/AddButton/AddButton';

interface DetailCardIngredientsProps {
  ingredients: FoodIngredient[];
}

export const DetailCardIngredients = ({
  ingredients,
}: DetailCardIngredientsProps) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '75%', md: '48%' },
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        position: 'relative',
        '&:hover .add-button': {
          opacity: 1,
          pointerEvents: 'auto',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1" color="primary">
          {`Ingredience: `}
        </Typography>
        <AddButton onClick={() => {}} />
      </Box>

      {ingredients.map((ingredient) => {
        const ingredientName = getIngredientNameById(ingredient.ingredientId);
        return (
          <Paper
            variant="outlined"
            key={`${ingredient.ingredientId}-${ingredient.amount}`}
            sx={{
              display: 'flex',
              padding: 1,
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              color="grey.600"
              width="4rem"
            >{`${ingredient.amount} g`}</Typography>
            <Typography variant="body2" color="grey.600">
              {`${ingredientName}`}
            </Typography>
          </Paper>
        );
      })}
    </Box>
  );
};
