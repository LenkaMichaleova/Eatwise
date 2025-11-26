import { TableCell, TableHead, TableRow } from '@mui/material';

export const CalTablesTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Název jídla</TableCell>
        <TableCell align="right">Kalorie</TableCell>
        <TableCell align="right">Tuk&nbsp;(g)</TableCell>
        <TableCell align="right">Sacharidy&nbsp;(g)</TableCell>
        <TableCell align="right">Bílkoviny&nbsp;(g)</TableCell>
      </TableRow>
    </TableHead>
  );
};
