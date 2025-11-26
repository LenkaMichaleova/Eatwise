import { TableCell, TableRow } from '@mui/material';
import type { CalTablesRow } from '../models/CalTableRow';
import { tableRowStyles } from '../styles/TableStyles';

interface RowDataProps {
  rowData: CalTablesRow;
}

export const CalTablesTableRow = ({ rowData }: RowDataProps) => {
  const { OrigFdNm, ENERC, FAT, CHOT, PROT } = rowData;

  return (
    <TableRow
      hover
      sx={tableRowStyles}
    >
      <TableCell component="th" scope="row">
        {OrigFdNm}
      </TableCell>
      <TableCell align="right">{ENERC}</TableCell>
      <TableCell align="right">{FAT}</TableCell>
      <TableCell align="right">{CHOT}</TableCell>
      <TableCell align="right">{PROT}</TableCell>
    </TableRow>
  );
};
