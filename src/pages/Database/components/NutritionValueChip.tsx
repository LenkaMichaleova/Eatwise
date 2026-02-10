import { Chip, Typography } from '@mui/material';
import type { Ingredient } from '../../../models/ingredient';

interface NutritionChipProps {
  type: Ingredient;
  value: number;
}

const NutritionConfig: Record<
  Ingredient,
  { name: string; color: string; bgColor: string }
> = {
  protein: { name: 'Bílkoviny', color: '#6B5E62', bgColor: '#F5E8EC' },
  carbs: { name: 'Sacharidy', color: '#6E6A5D', bgColor: '#FFF8E8' },
  fat: { name: 'Tuky', color: '#5D676B', bgColor: '#E8F2F5' },
};

export const NutritionValueChip = ({ type, value }: NutritionChipProps) => {
  const config = NutritionConfig[type];

  return (
    <Chip
      label={
        <Typography variant="caption">{`${config.name}: ${value} g`}</Typography>
      }
      size="small"
      sx={{
        backgroundColor: config.bgColor,
        color: config.color,
        fontWeight: 500,
      }}
    />
  );
};
