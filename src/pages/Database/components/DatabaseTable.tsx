import { Paper, Table, TableContainer } from '@mui/material';
import { tableContainerStyles, tableStyles } from '../styles/TableStyles';
import { DatabaseTableHead } from './DatabaseTableHead';
import { DatabaseTableBody } from './DatabaseTableBody';
import type { Row } from '../models/row';

export const DatabaseTable = ({data} : {data: Row[]}) => {
  return (
    <TableContainer component={Paper} sx={tableContainerStyles}>
      <Table sx={tableStyles} stickyHeader aria-label="sticky table">
        <DatabaseTableHead />
        <DatabaseTableBody data={data}/>
      </Table>
    </TableContainer>
  );
};
