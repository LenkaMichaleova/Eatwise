import { useState } from 'react';
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
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { AddButton } from '../../../components/Buttons/AddButton/AddButton';
import {
  IngredientChipStyled,
  IngredientChipTextStyled,
} from '../../DatabaseDetail/styles/detailIngredientsStyles';
import { AddDetailIngredientDialog } from '../../DatabaseDetail/components/DetailCardIngredients/AddDetailIngredientDialog';
import { addMeal } from '../../../services/mealsService';
import { getAllIngredients } from '../../../services/ingredientsService';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { Controller, useForm } from 'react-hook-form';

interface AddNewMealFormProps {
  onClose: VoidFunction;
}

export const AddNewMealForm = ({ onClose }: AddNewMealFormProps) => {
  const navigate = useNavigate();
  const [isIngredientDialogOpen, setIsIngredientDialogOpen] = useState(false);
  const ingredients = getAllIngredients();
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<MealFormData>({
    defaultValues: {
      name: '',
      type: 'breakfast',
      ingredients: [],
      recipe: '',
    },
  });
  const formIngredients = watch('ingredients');

  const handleSave = (formData: MealFormData) => {
    const newMeal = addMeal({
      ...formData,
      name: formData.name.trim(),
      recipe: formData.recipe.trim(),
      ingredients: formData.ingredients.filter(
        (ingredient) => ingredient.amount > 0
      ),
    });

    onClose();
    navigate(`${ROUTES.database}/${newMeal.id}`);
  };

  const handleIngredientAdd = (ingredient: FoodIngredient) => {
    const existingIngredientIndex = formIngredients.findIndex(
      (item) => item.ingredientId === ingredient.ingredientId
    );

    if (existingIngredientIndex === -1) {
      setValue('ingredients', [...formIngredients, ingredient]);
      return;
    }

    const nextIngredients = [...formIngredients];
    nextIngredients[existingIngredientIndex] = ingredient;
    setValue('ingredients', nextIngredients);
  };

  const handleIngredientDelete = (ingredientId: number) => {
    setValue(
      'ingredients',
      formIngredients.filter(
        (ingredient) => ingredient.ingredientId !== ingredientId
      )
    );
  };

  return (
    <AddNewMealFormStyled
      id="add-new-meal-form"
      onSubmit={handleSubmit(handleSave)}
    >
      <TextField
        placeholder="Název jídla"
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
        {...register('name', {
          required: 'Název jídla je povinný',
          maxLength: {
            value: 30,
            message: 'Název jídla může mít maximálně 30 znaků',
          },
          validate: {
            hasNonNumericCharacter: (value) =>
              /\D/.test(value) ||
              'Název jídla musí obsahovat alespoň jeden nečíselný znak',
            notBlank: (value) =>
              value.trim().length > 0 || 'Název jídla je povinný',
          },
        })}
      />

      <Controller
        control={control}
        name="type"
        rules={{ required: 'Typ jídla je povinný' }}
        render={({ field }) => (
          <FormControl fullWidth error={Boolean(errors.type)}>
            <Select
              fullWidth
              value={field.value}
              onChange={(event) =>
                field.onChange(event.target.value as FoodType)
              }
            >
              <MenuItem value="breakfast">{`Snídaně`}</MenuItem>
              <MenuItem value="snack1">{`Svačina 1`}</MenuItem>
              <MenuItem value="lunch">{`Oběd`}</MenuItem>
              <MenuItem value="snack2">{`Svačina 2`}</MenuItem>
              <MenuItem value="dinner">{`Večeře`}</MenuItem>
            </Select>
            <FormHelperText>{errors.type?.message}</FormHelperText>
          </FormControl>
        )}
      />

      <NewMealIngredientsBoxStyled>
        <NewMealIngredientsHeaderStyled>
          <Typography
            variant="body1"
            color="grey.500"
          >{`Ingredience`}</Typography>
          <Tooltip title={`Přidat ingredienci`} placement="left">
            <AddButton onClick={() => setIsIngredientDialogOpen(true)} />
          </Tooltip>
        </NewMealIngredientsHeaderStyled>

        <NewMealIngredientsContentStyled>
          {formIngredients?.map((ingredient) => {
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
                    <IngredientChipTextStyled>
                      <Typography variant="body2">{ingredientName}</Typography>
                      <Typography variant="subtitle2" color="grey.500">
                        {`množství:  ${ingredient.amount} g`}
                      </Typography>
                    </IngredientChipTextStyled>
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
        placeholder={`Zadejte recept...`}
        error={Boolean(errors.recipe)}
        helperText={errors.recipe?.message}
        {...register('recipe', {
          maxLength: {
            value: 2000,
            message: `Recept může mít maximálně 2000 znaků`,
          },
        })}
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
