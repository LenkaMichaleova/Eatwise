import { TableBody } from '@mui/material';
import type { CalTablesRow } from '../models/CalTableRow';
import { CalTablesTableRow } from './CalTablesTableRow';

export const CalTablesTableBody = ({ data }: { data: CalTablesRow[] }) => {
  return (
    <TableBody>
      {data.map((row) => {
        return <CalTablesTableRow rowData={row} key={row.OrigFdCd} />;
      })}
    </TableBody>
  );
};
