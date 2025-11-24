import { TableBody } from '@mui/material';
import { rows } from '../rows';
import { DatabaseTableRow } from './DatabaseTableRow';

export const DatabaseTableBody = () => {
  return (
    <TableBody>
      {rows.map((row) => {
        return <DatabaseTableRow rowData={row} key={row.name} />;
      })}
    </TableBody>
  );
};

// TODO fetch rows from server
