import { Box, Typography } from '@mui/material';
import { EditableBoxStyled } from '../../styles/databaseDetailStyles';
import { EditButton } from '../../../../components/EditButton/EditButton';
import { useState } from 'react';
import { EditRecipeDialog } from './EditRecipeDialog';

export const DetailCardRecipe = ({ recipe }: { recipe: string }) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  return (
    <Box
      width={{ xs: '100%', md: '48%' }}
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <EditableBoxStyled gap={1}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant="body1" color="primary">
            {`Recept: `}
          </Typography>
          <EditButton
            title="Upravit recept"
            placement="left"
            color="primary"
            onDialogOpen={() => setIsEditDialogOpen(true)}
          />
        </Box>

        <Typography variant="body2" color="grey.600" textAlign="justify">
          {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores suscipit repellendus, atque quaerat doloribus omnis corrupti unde assumenda explicabo adipisci quas animi in nesciunt libero a illum, quos minus? Molestiae quas, ipsa quidem inventore earum porro consequatur ipsam sit nam nemo laboriosam a sed quia suscipit. Saepe unde harum incidunt, debitis natus eligendi animi illo, temporibus distinctio consequuntur earum vero perspiciatis aliquid, obcaecati qui quas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolore unde excepturi pariatur ducimus obcaecati aliquam cupiditate fuga modi maxime.`}
        </Typography>
      </EditableBoxStyled>

      {isEditDialogOpen && (
        <EditRecipeDialog
          onClose={() => setIsEditDialogOpen(false)}
          currentValue={recipe}
        />
      )}
    </Box>
  );
};
