import { Paper, Table, TableContainer } from '@mui/material';
import { tableContainerStyles, tableStyles } from '../styles/TableStyles';
import { CalTablesTableHead } from './CalTablesTableHead';
import { CalTablesTableBody } from './CalTablesTableBody';
import type { CalTablesRow } from '../models/CalTableRow';

export const CalTablesTable = ({ data }: { data: CalTablesRow[] }) => {
  return (
    <TableContainer component={Paper} sx={tableContainerStyles}>
      <Table sx={tableStyles} stickyHeader aria-label="sticky table">
        <CalTablesTableHead />
        <CalTablesTableBody data={data} />
      </Table>
    </TableContainer>
  );
};
