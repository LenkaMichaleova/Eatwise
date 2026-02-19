import { Box, IconButton, Typography } from '@mui/material';
import { EditableBoxStyled } from '../../styles/databaseDetailStyles';
import { EditButton } from '../../../../components/Buttons/EditButton/EditButton';
import { useState } from 'react';
import { EditRecipeDialog } from './EditRecipeDialog';
import EditIcon from '@mui/icons-material/Edit';
import {
  DetailCardRecipeBoxStyled,
  RecipeBoxHeaderStyled,
} from '../../styles/detailCardRecipeStyles';

export const DetailCardRecipe = ({
  mealId,
  recipe,
}: {
  mealId: number;
  recipe: string;
}) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  return (
    <DetailCardRecipeBoxStyled>
      <EditableBoxStyled gap={2}>
        <RecipeBoxHeaderStyled>
          <Typography variant="body1" color="primary">
            {`Recept: `}
          </Typography>
          {recipe && (
            <EditButton
              title="Upravit recept"
              placement="left"
              color="primary"
              onDialogOpen={() => setIsEditDialogOpen(true)}
            />
          )}
        </RecipeBoxHeaderStyled>

        {recipe ? (
          <Typography variant="body2" color="grey.600" textAlign="justify">
            {recipe}
          </Typography>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="grey.400" fontStyle="italic">
              {'Přidat recept'}
            </Typography>

            <IconButton onClick={() => setIsEditDialogOpen(true)}>
              <EditIcon fontSize="small" sx={{ color: 'grey.400' }} />
            </IconButton>
          </Box>
        )}
      </EditableBoxStyled>

      {isEditDialogOpen && (
        <EditRecipeDialog
          mealId={mealId}
          onClose={() => setIsEditDialogOpen(false)}
          currentValue={recipe}
        />
      )}
    </DetailCardRecipeBoxStyled>
  );
};
