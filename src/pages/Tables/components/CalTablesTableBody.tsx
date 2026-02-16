import { TableBody } from '@mui/material';
import type { Ingredient } from '../../../models/Ingredient';
import { CalTablesTableRow } from './CalTablesTableRow';

export const CalTablesTableBody = ({ data }: { data: Ingredient[] }) => {
  return (
    <TableBody>
      {data.map((row) => {
        return <CalTablesTableRow rowData={row} key={row.id} />;
      })}
    </TableBody>
  );
};
