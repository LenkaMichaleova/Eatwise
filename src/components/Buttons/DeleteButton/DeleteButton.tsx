import { Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonStyled } from '../styles/buttonStyles';

export const DeleteButton = ({ onClick }: { onClick: VoidFunction }) => {
  return (
    <Tooltip title="Smazat jídlo" placement="bottom-end">
      <ButtonStyled onClick={onClick} className="deleteButton">
        <DeleteIcon color="primary" />
      </ButtonStyled>
    </Tooltip>
  );
};
