import { Typography } from '@mui/material';
import { getIngredientNameById } from '../../../../services/ingredientsService';
import type { FoodIngredient } from '../../../../models/foodIngredient';
import { AddButton } from '../../../../components/AddButton/AddButton';
import {
  IngredientsBoxStyled,
  IngredientChipStyled,
  IngredientBoxHeaderStyled,
  IngredientChipLabelStyled,
} from '../../styles/detailIngredientsStyles';
import { useState } from 'react';
import { AddDetailIngredientDialog } from './AddDetailIngredientDialog';
import { EditDetailIngredientDialog } from './EditDetailIngredientDialog';

interface DetailCardIngredientsProps {
  ingredients: FoodIngredient[];
}

export const DetailCardIngredients = ({
  ingredients,
}: DetailCardIngredientsProps) => {
  const [isAddIngDialogOpen, setIsAddIngDialogOpen] = useState(false);
  const [isEditIngDialogOpen, setIsEditIngDialogOpen] = useState(false);

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
            onClick={() => setIsEditIngDialogOpen(true)}
            onDelete={() => {}}
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
          onClose={() => setIsAddIngDialogOpen(false)}
        />
      )}
      {isEditIngDialogOpen && (
        <EditDetailIngredientDialog
          currentIngredient={ingredients[0]}
          onClose={() => setIsEditIngDialogOpen(false)}
        />
      )}
    </IngredientsBoxStyled>
  );
};
