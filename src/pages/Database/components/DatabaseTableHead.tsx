import { TableCell, TableHead, TableRow } from '@mui/material';

export const DatabaseTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Název jídla</TableCell>
        <TableCell align="right">Typ jídla</TableCell>
        <TableCell align="right">Calorie</TableCell>
        <TableCell align="right">Tuk&nbsp;(g)</TableCell>
        <TableCell align="right">Sacharidy&nbsp;(g)</TableCell>
        <TableCell align="right">Bílkoviny&nbsp;(g)</TableCell>
      </TableRow>
    </TableHead>
  );
};
