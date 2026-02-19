import { useState, type FormEvent } from 'react';
import {
  AddNewMealFormStyled,
  NewMealIngredientsBoxStyled,
  NewMealIngredientsContentStyled,
  NewMealIngredientsHeaderStyled,
} from '../styles/addNewMealStyles';
import type { MealFormData } from '../../../models/mealFormData';
import type { FoodIngredient } from '../../../models/foodIngredient';
import type { FoodType } from '../../../foodData-old';
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
    onClose();
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
        sx={{ color: 'grey.500' }}
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
          {formData.ingredients?.map((ingredient) => (
            <IngredientChipStyled
              key={ingredient.ingredientId}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" mb={-1}>
                      {ingredient.ingredientId}
                    </Typography>
                    <Typography variant="subtitle2" color="grey.500">
                      {`množství:  ${ingredient.amount} g`}
                    </Typography>
                  </Box>
                </Box>
              }
              onDelete={() => {}}
              color="primary"
              variant="outlined"
            />
          ))}
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
          onClose={() => setIsIngredientDialogOpen(false)}
        />
      )}
    </AddNewMealFormStyled>
  );
};
