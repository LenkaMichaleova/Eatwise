import { useState, type FormEvent } from 'react';
import {
  AddNewMealFormStyled,
  NewMealIngredientsBoxStyled,
  NewMealIngredientsContentStyled,
  NewMealIngredientsHeaderStyled,
} from '../styles/addNewMealStyles';
import type { MealFormData } from '../../../models/mealFormData';
import type { FoodIngredient } from '../../../models/foodIngredient';
import type { FoodType } from '../../../models/foodType';
import {
  Box,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { AddButton } from '../../../components/Buttons/AddButton/AddButton';
import { IngredientChipStyled } from '../../DatabaseDetail/styles/detailIngredientsStyles';
import { AddDetailIngredientDialog } from '../../DatabaseDetail/components/DetailCardIngredients/AddDetailIngredientDialog';
import { addMeal } from '../../../services/mealsService';
import { getAllIngredients } from '../../../services/ingredientsService';

interface AddNewMealFormProps {
  onClose: VoidFunction;
}

export const AddNewMealForm = ({ onClose }: AddNewMealFormProps) => {
  const [formData, setFormData] = useState<MealFormData>({
    name: '',
    type: 'breakfast',
    ingredients: [],
    recipe: '',
  });
  const [isIngredientDialogOpen, setIsIngredientDialogOpen] = useState(false);
  const ingredients = getAllIngredients();

  const handleChange = (
    name: string,
    value: string | number | null | FoodType | FoodIngredient[]
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return;
    }

    addMeal({
      ...formData,
      name: formData.name.trim(),
      recipe: formData.recipe.trim(),
      ingredients: formData.ingredients.filter(
        (ingredient) => ingredient.amount > 0
      ),
    });

    onClose();
  };

  const handleIngredientAdd = (ingredient: FoodIngredient) => {
    setFormData((prevData) => {
      const existingIngredientIndex = prevData.ingredients.findIndex(
        (item) => item.ingredientId === ingredient.ingredientId
      );

      if (existingIngredientIndex === -1) {
        return {
          ...prevData,
          ingredients: [...prevData.ingredients, ingredient],
        };
      }

      const nextIngredients = [...prevData.ingredients];
      nextIngredients[existingIngredientIndex] = ingredient;

      return {
        ...prevData,
        ingredients: nextIngredients,
      };
    });
  };

  const handleIngredientDelete = (ingredientId: number) => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.filter(
        (ingredient) => ingredient.ingredientId !== ingredientId
      ),
    }));
  };

  return (
    <AddNewMealFormStyled id="add-new-meal-form" onSubmit={handleSubmit}>
      <TextField
        placeholder="Název jídla"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />

      <Select
        fullWidth
        value={formData.type}
        onChange={(e) => handleChange('type', e.target.value)}
      >
        <MenuItem value="breakfast">{`Snídaně`}</MenuItem>
        <MenuItem value="snack1">{`Svačina 1`}</MenuItem>
        <MenuItem value="lunch">{`Oběd`}</MenuItem>
        <MenuItem value="snack2">{`Svačina 2`}</MenuItem>
        <MenuItem value="dinner">{`Večeře`}</MenuItem>
      </Select>

      <NewMealIngredientsBoxStyled>
        <NewMealIngredientsHeaderStyled>
          <Typography
            variant="body1"
            color="grey.500"
          >{`Ingredience`}</Typography>
          <Tooltip title="Přidat ingredienci" placement="left">
            <AddButton onClick={() => setIsIngredientDialogOpen(true)} />
          </Tooltip>
        </NewMealIngredientsHeaderStyled>

        <NewMealIngredientsContentStyled>
          {formData.ingredients?.map((ingredient) => {
            const ingredientName = ingredients.find(
              (ing) => ing.id === ingredient.ingredientId
            )?.name;

            if (!ingredientName) {
              return null;
            }
            return (
              <IngredientChipStyled
                key={ingredient.ingredientId}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="body2" mb={-1}>
                        {ingredientName}
                      </Typography>
                      <Typography variant="subtitle2" color="grey.500">
                        {`množství:  ${ingredient.amount} g`}
                      </Typography>
                    </Box>
                  </Box>
                }
                onDelete={() => handleIngredientDelete(ingredient.ingredientId)}
                color="primary"
                variant="outlined"
              />
            );
          })}
        </NewMealIngredientsContentStyled>
      </NewMealIngredientsBoxStyled>

      <TextField
        multiline
        rows={6}
        fullWidth
        placeholder="Zadejte recept..."
        value={formData.recipe}
        onChange={(e) => handleChange('recipe', e.target.value)}
      />

      {isIngredientDialogOpen && (
        <AddDetailIngredientDialog
          onSave={handleIngredientAdd}
          onClose={() => setIsIngredientDialogOpen(false)}
        />
      )}
    </AddNewMealFormStyled>
  );
};
