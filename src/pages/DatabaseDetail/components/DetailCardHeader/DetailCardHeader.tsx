import { CardHeader, Typography } from '@mui/material';
import { EditableBoxStyled } from '../../styles/databaseDetailStyles';
import { EditMealTitleDialog } from './EditMealTitleDialog';
import { DetailCardHeaderStyled } from '../../styles/detailCardStyles';
import { EditButton } from '../../../../components/EditButton/EditButton';
import { DeleteButton } from '../../../../components/DeleteButton/DeleteButton';
import { useState } from 'react';
import { DeleteConfirmDialog } from '../../../../components/DeleteButton/DeleteConfirmDialog';

interface DetailCardHeaderProps {
  title: string;
  calories: number;
  kj: number;
}

export const DetailCardHeader = ({
  title,
  calories,
  kj,
}: DetailCardHeaderProps) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  return (
    <>
      <CardHeader
        title={
          <DetailCardHeaderStyled>
            <EditableBoxStyled>
              <Typography variant="h5" color="primary">
                {title}
                <EditButton
                  title="Upravit název jídla"
                  placement="bottom"
                  color="primary"
                  onDialogOpen={() => setIsEditDialogOpen(true)}
                />
              </Typography>
            </EditableBoxStyled>

            <DeleteButton onClick={() => setIsDeleteDialogOpen(true)} />
          </DetailCardHeaderStyled>
        }
        subheader={
          <Typography variant="subtitle1" color="grey.500">
            {`${calories} Kcal / ${Math.round(kj)} kJ`}
          </Typography>
        }
      />

      {isEditDialogOpen && (
        <EditMealTitleDialog
          onClose={() => setIsEditDialogOpen(false)}
          currentValue={title}
        />
      )}

      {isDeleteDialogOpen && (
        <DeleteConfirmDialog
          mealTitle={title}
          onClose={() => setIsDeleteDialogOpen(false)}
        />
      )}
    </>
  );
};
