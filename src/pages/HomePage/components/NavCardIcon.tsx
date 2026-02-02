import StorageIcon from '@mui/icons-material/Storage';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { NavCardTypes, type NavCardType } from '../../../models/navCard';

const ICON_MAP: Record<NavCardType, React.ReactNode> = {
  [NavCardTypes.database]: <StorageIcon fontSize="large" color="primary" />,
  [NavCardTypes.menu]: <RestaurantMenuIcon fontSize="large" color="primary" />,
  [NavCardTypes.calories]: (
    <LocalFireDepartmentIcon fontSize="large" color="primary" />
  ),
  [NavCardTypes.photo]: <PhotoCameraIcon fontSize="large" color="primary" />,
};

export const NavCardIcon = ({ type }: { type: NavCardType }) => {
  return <>{ICON_MAP[type]}</>;
};
