import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button component={Link} to={ROUTES.home}>
        <ArrowBackIcon fontSize="large" />
      </Button>
      <Typography variant="h2" color="primary">
        {title}
      </Typography>
    </Box>
  );
};
