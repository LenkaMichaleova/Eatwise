import { TableCell, TableHead, TableRow } from '@mui/material';

export const CalTablesTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>{`Název jídla`}</TableCell>
        <TableCell align="right">{`Kalorie`}</TableCell>
        <TableCell align="right">{`Tuk (g)`}</TableCell>
        <TableCell align="right">{`Sacharidy (g)`}</TableCell>
        <TableCell align="right">{`Bílkoviny (g)`}</TableCell>
      </TableRow>
    </TableHead>
  );
};
