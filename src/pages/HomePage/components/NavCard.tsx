import { Box, CardActionArea, Typography } from '@mui/material';
import { Link } from 'react-router';
import { CardHeaderStyled, CardStyled } from '../styles/NavCardStyles';
import type { RoutePath } from '../../../constants/routes';
import { NavCardIcon } from './NavCardIcon';
import type { NavCardType } from '../../../models/navCard';

interface NavCardProps {
  path: RoutePath;
  title: NavCardType;
}

export function NavCard({ path, title }: NavCardProps) {
  return (
    <CardStyled variant="outlined">
      <CardActionArea component={Link} to={path}>
        <CardHeaderStyled
          title={
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
            >
              <NavCardIcon type={title} />
              <Typography variant="h5">{title}</Typography>
            </Box>
          }
        />
      </CardActionArea>
    </CardStyled>
  );
}
