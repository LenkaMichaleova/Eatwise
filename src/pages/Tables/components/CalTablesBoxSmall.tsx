import type { CalTablesRow } from '../models/CalTableRow';
import { CalTablesBoxSmallStyled } from '../styles/calTablesStyles';
import { FoodCardSmall } from './FoodCardSmall';

export const CalTablesBoxSmall = ({ data }: { data: CalTablesRow[] }) => {
  return (
    <CalTablesBoxSmallStyled>
      {data.map((row) => (
        <FoodCardSmall row={row} key={row.OrigFdCd} />
      ))}
    </CalTablesBoxSmallStyled>
  );
};
