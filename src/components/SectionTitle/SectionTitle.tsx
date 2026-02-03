import { IconButton, Tooltip, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { SectionTitleStyled } from './styles/sectionTitleStyles';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <SectionTitleStyled>
      <Tooltip title="Zpět na domovskou stránku" placement="right">
        <IconButton component={Link} to={ROUTES.home}>
          <ArrowBackIcon fontSize="large" color="primary" />
        </IconButton>
      </Tooltip>
      <Typography variant="h2" color="primary">
        {title}
      </Typography>
    </SectionTitleStyled>
  );
};
