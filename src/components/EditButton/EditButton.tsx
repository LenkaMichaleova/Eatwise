import { Tooltip } from '@mui/material';
import { EditButtonStyled } from './styles/editButtonStyles';
import EditIcon from '@mui/icons-material/Edit';

interface EditButtonProps {
  readonly title: string;
  readonly placement:
    | 'right'
    | 'left'
    | 'top'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'top-end'
    | 'top-start'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
  readonly color: string;
  readonly onDialogOpen: () => void;
}

export const EditButton = ({
  title,
  placement,
  onDialogOpen,
  color,
}: EditButtonProps) => {
  return (
    <Tooltip title={title} placement={placement} color={color}>
      <EditButtonStyled
        className="editButton"
        onClick={(e) => {
          e.stopPropagation();
          onDialogOpen();
        }}
      >
        <EditIcon fontSize="small" />
      </EditButtonStyled>
    </Tooltip>
  );
};
