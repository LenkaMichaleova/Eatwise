import { Box, Typography } from '@mui/material';
import { getIngredientNameById } from '../../../../services/ingredientsService';
import type { FoodIngredient } from '../../../../models/foodIngredient';
import { AddButton } from '../../../../components/AddButton/AddButton';
import { IngredientChipStyled } from '../../styles/detailIngredientsStyles';
import { useState } from 'react';
import { AddDetailIngredientDialog } from './AddDetailIngredientDialog';

interface DetailCardIngredientsProps {
  ingredients: FoodIngredient[];
}

export const DetailCardIngredients = ({
  ingredients,
}: DetailCardIngredientsProps) => {
  const [isAddIngDialogOpen, setIsAddIngDialogOpen] = useState(false);

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
        <AddButton onClick={() => setIsAddIngDialogOpen(true)} />
      </Box>

      {ingredients.map((ingredient) => {
        const ingredientName = getIngredientNameById(ingredient.ingredientId);
        return (
          <IngredientChipStyled
            variant="outlined"
            key={`${ingredient.ingredientId}-${ingredient.amount}`}
            onClick={() => {}}
            onDelete={() => {}}
            label={
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  gap: 1,
                  padding: 1,
                  width: '100%',
                }}
              >
                <Typography
                  variant="body2"
                  color="grey.600"
                  width="3rem"
                >{`${ingredient.amount} g`}</Typography>
                <Typography
                  variant="body2"
                  color="grey.600"
                  sx={{
                    whiteSpace: 'normal',
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  {`${ingredientName}`}
                </Typography>
              </Box>
            }
          />
        );
      })}

      {isAddIngDialogOpen && (
        <AddDetailIngredientDialog
          onClose={() => setIsAddIngDialogOpen(false)}
        />
      )}
    </Box>
  );
};
