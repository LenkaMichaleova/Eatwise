import { Paper, Table, TableContainer } from '@mui/material';
import { tableContainerStyles, tableStyles } from '../styles/TableStyles';
import { CalTablesTableHead } from './CalTablesTableHead';
import { CalTablesTableBody } from './CalTablesTableBody';
import type { Ingredient } from '../../../models/Ingredient';

export const CalTablesTable = ({ data }: { data: Ingredient[] }) => {
  return (
    <TableContainer component={Paper} sx={tableContainerStyles}>
      <Table sx={tableStyles} stickyHeader aria-label="sticky table">
        <CalTablesTableHead />
        <CalTablesTableBody data={data} />
      </Table>
    </TableContainer>
  );
};
