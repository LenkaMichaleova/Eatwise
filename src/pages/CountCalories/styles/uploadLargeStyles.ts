import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UploadButtonLargeStyled = styled('label')(({ theme }) => ({
  padding: '1rem',
  width: '80vw',
  maxWidth: '350px',
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: '1rem',
  boxShadow: '0 5px 30px 5px rgba(0,0,0,0.1)',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  gap: 15,
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

export const UploadWrapperLargeStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
  gap: 20,
});
