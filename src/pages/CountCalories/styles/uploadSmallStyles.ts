import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UploadButtonSmallStyled = styled('label')(({ theme }) => ({
  padding: '1rem',
  maxWidth: '60px',
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: '1rem',
  boxShadow: '0 5px 30px 5px rgba(0,0,0,0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem 1rem',
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

export const UploadWrapperSmallStyled = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});
