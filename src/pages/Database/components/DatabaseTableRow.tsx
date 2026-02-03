import { TableCell, TableRow } from '@mui/material';
import type { Row } from '../models/row';
import { tableRowStyles } from '../styles/TableStyles';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { IconLabel } from '../../../components/IconLabel/IconLabel';

interface RowDataProps {
  rowData: Row;
}

export const DatabaseTableRow = ({ rowData }: RowDataProps) => {
  const { id, name, type, calories, fat, carbs, protein } = rowData;
  const navigate = useNavigate();
  const path = generatePath(ROUTES.databaseDetail, {
    databaseId: id.toString(),
  });

  return (
    <TableRow
      hover
      onClick={() => navigate(path)}
      role="button"
      sx={tableRowStyles}
    >
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">
        <IconLabel type={type} />
      </TableCell>
      <TableCell align="right">{calories}</TableCell>
      <TableCell align="right">{fat}</TableCell>
      <TableCell align="right">{carbs}</TableCell>
      <TableCell align="right">{protein}</TableCell>
    </TableRow>
  );
};
