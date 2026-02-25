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
import { DEFAULT_KJ_PER_DAY } from '../../../../models/kjPerDayOptions';
import { getDailyKj } from '../../../../services/dailyKjService';

interface DetailCardIngredientsProps {
  mealId: number;
  ingredients: FoodIngredient[];
  baseIngredients?: FoodIngredient[];
  baseDailyKj?: number;
}

export const DetailCardIngredients = ({
  mealId,
  ingredients,
  baseIngredients,
  baseDailyKj,
}: DetailCardIngredientsProps) => {
  const [isAddIngDialogOpen, setIsAddIngDialogOpen] = useState(false);
  const [ingredientToEdit, setIngredientToEdit] =
    useState<FoodIngredient | null>(null);
  const currentDailyKj = getDailyKj();
  const sourceBaseDailyKj = baseDailyKj ?? DEFAULT_KJ_PER_DAY;
  const isScaled = currentDailyKj !== sourceBaseDailyKj;
  const displayIngredients = ingredients;
  const editableIngredients = baseIngredients ?? ingredients;

  const toBaseIngredient = (ingredient: FoodIngredient): FoodIngredient => {
    if (!isScaled) {
      return ingredient;
    }

    const factor = sourceBaseDailyKj / currentDailyKj;

    return {
      ...ingredient,
      amount: Math.round(ingredient.amount * factor * 10) / 10,
    };
  };

  const handleIngredientAdd = (ingredient: FoodIngredient) => {
    const nextIngredient = toBaseIngredient(ingredient);
    const existingIngredientIndex = editableIngredients.findIndex(
      (item) => item.ingredientId === ingredient.ingredientId
    );

    if (existingIngredientIndex === -1) {
      updateMeal(mealId, {
        ingredients: [...editableIngredients, nextIngredient],
      });
      return;
    }

    const nextIngredients = [...editableIngredients];
    nextIngredients[existingIngredientIndex] = nextIngredient;
    updateMeal(mealId, { ingredients: nextIngredients });
  };

  const handleIngredientDelete = (ingredientId: number) => {
    const nextIngredients = editableIngredients.filter(
      (ingredient) => ingredient.ingredientId !== ingredientId
    );

    updateMeal(mealId, { ingredients: nextIngredients });
  };

  const handleIngredientEdit = (
    currentIngredient: FoodIngredient,
    nextIngredient: FoodIngredient
  ) => {
    const ingredientsWithoutCurrent = editableIngredients.filter(
      (ingredient) => ingredient.ingredientId !== currentIngredient.ingredientId
    );
    const nextBaseIngredient = toBaseIngredient(nextIngredient);

    const existingIngredientIndex = ingredientsWithoutCurrent.findIndex(
      (ingredient) =>
        ingredient.ingredientId === nextBaseIngredient.ingredientId
    );

    if (existingIngredientIndex === -1) {
      updateMeal(mealId, {
        ingredients: [...ingredientsWithoutCurrent, nextBaseIngredient],
      });
      return;
    }

    const mergedIngredients = [...ingredientsWithoutCurrent];
    mergedIngredients[existingIngredientIndex] = nextBaseIngredient;
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

      {displayIngredients.map((ingredient) => {
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
