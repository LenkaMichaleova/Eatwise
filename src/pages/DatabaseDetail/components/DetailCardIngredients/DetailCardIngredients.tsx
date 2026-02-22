import { Typography } from '@mui/material';
import { getIngredientNameById } from '../../../../services/ingredientsService';
import type { FoodIngredient } from '../../../../models/foodIngredient';
import { AddButton } from '../../../../components/Buttons/AddButton/AddButton';
import {
  IngredientsBoxStyled,
  IngredientChipStyled,
  IngredientBoxHeaderStyled,
  IngredientChipLabelStyled,
} from '../../styles/detailIngredientsStyles';
import { useState } from 'react';
import { AddDetailIngredientDialog } from './AddDetailIngredientDialog';
import { EditDetailIngredientDialog } from './EditDetailIngredientDialog';
import { updateMeal } from '../../../../services/mealsService';

interface DetailCardIngredientsProps {
  mealId: number;
  ingredients: FoodIngredient[];
}

export const DetailCardIngredients = ({
  mealId,
  ingredients,
}: DetailCardIngredientsProps) => {
  const [isAddIngDialogOpen, setIsAddIngDialogOpen] = useState(false);
  const [ingredientToEdit, setIngredientToEdit] =
    useState<FoodIngredient | null>(null);

  const handleIngredientAdd = (ingredient: FoodIngredient) => {
    const existingIngredientIndex = ingredients.findIndex(
      (item) => item.ingredientId === ingredient.ingredientId
    );

    if (existingIngredientIndex === -1) {
      updateMeal(mealId, { ingredients: [...ingredients, ingredient] });
      return;
    }

    const nextIngredients = [...ingredients];
    nextIngredients[existingIngredientIndex] = ingredient;
    updateMeal(mealId, { ingredients: nextIngredients });
  };

  const handleIngredientDelete = (ingredientId: number) => {
    const nextIngredients = ingredients.filter(
      (ingredient) => ingredient.ingredientId !== ingredientId
    );

    updateMeal(mealId, { ingredients: nextIngredients });
  };

  const handleIngredientEdit = (
    currentIngredient: FoodIngredient,
    nextIngredient: FoodIngredient
  ) => {
    const ingredientsWithoutCurrent = ingredients.filter(
      (ingredient) => ingredient.ingredientId !== currentIngredient.ingredientId
    );

    const existingIngredientIndex = ingredientsWithoutCurrent.findIndex(
      (ingredient) => ingredient.ingredientId === nextIngredient.ingredientId
    );

    if (existingIngredientIndex === -1) {
      updateMeal(mealId, {
        ingredients: [...ingredientsWithoutCurrent, nextIngredient],
      });
      return;
    }

    const mergedIngredients = [...ingredientsWithoutCurrent];
    mergedIngredients[existingIngredientIndex] = nextIngredient;
    updateMeal(mealId, { ingredients: mergedIngredients });
  };

  return (
    <IngredientsBoxStyled>
      <IngredientBoxHeaderStyled>
        <Typography variant="body1" color="primary">
          {`Ingredience: `}
        </Typography>
        <AddButton onClick={() => setIsAddIngDialogOpen(true)} />
      </IngredientBoxHeaderStyled>

      {ingredients.map((ingredient) => {
        const ingredientName = getIngredientNameById(ingredient.ingredientId);
        return (
          <IngredientChipStyled
            variant="outlined"
            key={`${ingredient.ingredientId}-${ingredient.amount}`}
            onClick={() => setIngredientToEdit(ingredient)}
            onDelete={() => handleIngredientDelete(ingredient.ingredientId)}
            label={
              <IngredientChipLabelStyled>
                <Typography
                  variant="body2"
                  color="grey.600"
                  width="3rem"
                  textAlign="right"
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
              </IngredientChipLabelStyled>
            }
          />
        );
      })}

      {isAddIngDialogOpen && (
        <AddDetailIngredientDialog
          onSave={handleIngredientAdd}
          onClose={() => setIsAddIngDialogOpen(false)}
        />
      )}
      {ingredientToEdit && (
        <EditDetailIngredientDialog
          currentIngredient={ingredientToEdit}
          onSave={(nextIngredient) =>
            handleIngredientEdit(ingredientToEdit, nextIngredient)
          }
          onClose={() => setIngredientToEdit(null)}
        />
      )}
    </IngredientsBoxStyled>
  );
};
