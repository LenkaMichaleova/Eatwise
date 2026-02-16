import { TableCell, TableRow } from '@mui/material';
import type { Ingredient } from '../../../models/ingredient';
import { tableRowStyles } from '../styles/TableStyles';

interface RowDataProps {
  rowData: Ingredient;
}

export const CalTablesTableRow = ({ rowData }: RowDataProps) => {
  const { name, kcal, fats, carbohydrates, proteins } = rowData;

  return (
    <TableRow hover sx={tableRowStyles}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{kcal}</TableCell>
      <TableCell align="right">{fats}</TableCell>
      <TableCell align="right">{carbohydrates}</TableCell>
      <TableCell align="right">{proteins}</TableCell>
    </TableRow>
  );
};
