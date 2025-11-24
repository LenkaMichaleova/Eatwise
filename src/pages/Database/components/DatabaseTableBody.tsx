import { TableBody } from '@mui/material';
import { DatabaseTableRow } from './DatabaseTableRow';
import type { Row } from '../models/row';

export const DatabaseTableBody = ({data} : {data: Row[]}) => {
  return (
    <TableBody>
      {data.map((row) => {
        return <DatabaseTableRow rowData={row} key={row.name} />;
      })}
    </TableBody>
  );
};
