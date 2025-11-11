import { Box, Typography } from '@mui/material';

const footerStyles = {
  display: 'none',
  '@media(min-width:960px)': {
    display: 'block',
    bgcolor: 'grey.100',
    padding: '0.% 0',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
};

export function Footer() {
  return (
    <Box
      component="footer"
      sx={footerStyles}
    >
      <Typography variant="h6" color="grey.600">
        © ReactGirls Mentoring 2025 - Eatwise
      </Typography>
    </Box>
  );
}
