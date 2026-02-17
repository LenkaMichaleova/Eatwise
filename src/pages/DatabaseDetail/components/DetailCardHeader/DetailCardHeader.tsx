import { CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import { EditableBoxStyled } from '../../styles/databaseDetailStyles';
import { EditMealTitleDialog } from './EditMealTitleDialog';
import { DetailCardHeaderStyled } from '../../styles/detailCardStyles';
import { EditButton } from '../../../../components/EditButton/EditButton';
import { useState } from 'react';
import type { FoodType } from '../../../../models/foodType';
import { IconLabel } from '../../../../components/IconLabel/IconLabel';
import { EditMealTypeDialog } from './EditMealTypeDialog';

interface DetailCardHeaderProps {
  title: string;
  calories: number;
  kj: number;
  type: FoodType;
}

export const DetailCardHeader = ({
  title,
  calories,
  kj,
  type,
}: DetailCardHeaderProps) => {
  const [isEditTitleDialogOpen, setIsEditTitleDialogOpen] = useState(false);
  const [isEditTypeDialogOpen, setIsEditTypeDialogOpen] = useState(false);

  return (
    <>
      <CardHeader
        title={
          <DetailCardHeaderStyled>
            <EditableBoxStyled width="80%">
              <Typography variant="h3" color="primary">
                {title}
                <EditButton
                  title="Upravit název jídla"
                  placement="bottom"
                  color="primary"
                  onDialogOpen={() => setIsEditTitleDialogOpen(true)}
                />
              </Typography>
            </EditableBoxStyled>
            <Tooltip title="Upravit typ jídla" placement="left">
              <IconButton
                onClick={() => setIsEditTypeDialogOpen(true)}
                sx={{ position: 'absolute', top: -10, right: 0 }}
              >
                <IconLabel
                  type={type}
                  width={{ xs: '45px', sm: '70px', md: '90px' }}
                />
              </IconButton>
            </Tooltip>
          </DetailCardHeaderStyled>
        }
        subheader={
          <Typography variant="subtitle1" color="grey.500">
            {`${calories} Kcal / ${Math.round(kj)} kJ`}
          </Typography>
        }
      />

      {isEditTitleDialogOpen && (
        <EditMealTitleDialog
          onClose={() => setIsEditTitleDialogOpen(false)}
          currentValue={title}
        />
      )}

      {isEditTypeDialogOpen && (
        <EditMealTypeDialog
          currentValue={type}
          onClose={() => setIsEditTypeDialogOpen(false)}
        />
      )}
    </>
  );
};
