import { Typography } from '@mui/material';
import { FooterStyled } from './styles/LayoutStyles';

export function Footer() {
  return (
    <FooterStyled>
      <Typography variant="h6" color="grey.600">
        © ReactGirls Mentoring 2025 - Eatwise
      </Typography>
    </FooterStyled>
  );
}
