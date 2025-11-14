import { CardActionArea } from '@mui/material';
import { Link } from 'react-router';
import { CardHeaderStyled, CardStyled } from './NavCardStyles';

interface NavCardProps {
  path: string;
  title: string;
}

export function NavCard({ path, title }: NavCardProps) {
  return (
    <CardStyled variant="outlined">
      <CardActionArea component={Link} to={`/${path}`}>
        <CardHeaderStyled title={title} />
      </CardActionArea>
    </CardStyled>
  );
}
