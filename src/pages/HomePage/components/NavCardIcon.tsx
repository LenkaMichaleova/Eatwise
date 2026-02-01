import StorageIcon from '@mui/icons-material/Storage';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export const NavCardIcon = ({ type }: { type: string }) => {
  return (
    <>
      {type === 'Databáze jídel' && (
        <StorageIcon fontSize="large" color="primary" />
      )}
      {type === 'Jídelníček' && (
        <RestaurantMenuIcon fontSize="large" color="primary" />
      )}
      {type === 'Kalorické tabulky' && (
        <LocalFireDepartmentIcon fontSize="large" color="primary" />
      )}
      {type === 'Vyfoť jídlo' && (
        <PhotoCameraIcon fontSize="large" color="primary" />
      )}
    </>
  );
};
