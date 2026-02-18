import { Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteButtonStyled } from './styles/deleteButtonStyles';

export const DeleteButton = ({ onClick }: { onClick: VoidFunction }) => {
  return (
    <Tooltip title="Smazat jídlo" placement="bottom-end">
      <DeleteButtonStyled onClick={onClick} className="deleteButton">
        <DeleteIcon color="primary" />
      </DeleteButtonStyled>
    </Tooltip>
  );
};
