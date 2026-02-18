import { IconButton, Tooltip } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const AddButton = ({ onClick }: { onClick: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    onClick();
  };

  return (
    <Tooltip title="Přidat ingredienci" placement="left">
      <IconButton
        onClick={handleClick}
        color="primary"
        className="add-button"
        tabIndex={-1}
        sx={{
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.2s ease',
        }}
      >
        <AddCircleIcon />
      </IconButton>
    </Tooltip>
  );
};
