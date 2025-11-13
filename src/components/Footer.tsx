import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterStyled = styled('footer')(({ theme }) => ({
  display: 'block',
  backgroundColor: theme.palette.secondary.light,
  bottom: 0,
  width: '100%',
  textAlign: 'center',
}));

export function Footer() {
  return (
    <FooterStyled>
      <Typography variant="h6" color="grey.600">
        © ReactGirls Mentoring 2025 - Eatwise
      </Typography>
    </FooterStyled>
  );
}
