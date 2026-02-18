import { Tooltip } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ButtonStyled } from '../styles/buttonStyles';

export const AddButton = ({ onClick }: { onClick: VoidFunction }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    onClick();
  };

  return (
    <Tooltip title="Přidat ingredienci" placement="left">
      <ButtonStyled
        onClick={handleClick}
        color="primary"
        className="add-button"
        tabIndex={-1}
      >
        <AddCircleIcon />
      </ButtonStyled>
    </Tooltip>
  );
};
