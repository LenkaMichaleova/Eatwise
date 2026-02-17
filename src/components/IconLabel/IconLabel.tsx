import labelDinner from '../../assets/label-dinner.png';
import labelLunch from '../../assets/label-lunch.png';
import labelSnack1 from '../../assets/label-snack1.png';
import labelSnack2 from '../../assets/label-snack2.png';
import labelBreakfast from '../../assets/label-breakfast.png';
import type { FoodType } from '../../models/foodType';
import { Box } from '@mui/material';
import type { ResponsiveStyleValue } from '@mui/system';

const IconLabelConfig: Record<FoodType, { icon: string; label: string }> = {
  breakfast: { icon: labelBreakfast, label: 'Breakfast' },
  lunch: { icon: labelLunch, label: 'Lunch' },
  dinner: { icon: labelDinner, label: 'Dinner' },
  snack1: { icon: labelSnack1, label: 'Snack 1' },
  snack2: { icon: labelSnack2, label: 'Snack 2' },
};

interface IconLabelProps {
  type: FoodType;
  width?: ResponsiveStyleValue<string | number>;
}

export const IconLabel = ({ type, width }: IconLabelProps) => {
  const config = IconLabelConfig[type];
  return (
    <Box
      component="img"
      src={config.icon}
      alt={config.label}
      width={width || '50px'}
    />
  );
};
