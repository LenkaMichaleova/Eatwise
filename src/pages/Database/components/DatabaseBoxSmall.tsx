import type { Row } from '../models/row';
import { DatabaseBoxSmallStyled } from '../styles/DatabaseStyles';
import { FoodCardSmall } from './FoodCardSmall';

export const DatabaseBoxSmall = ({ data }: { data: Row[] }) => {
  return (
    <DatabaseBoxSmallStyled>
      {data.map((row) => (
        <FoodCardSmall row={row} key={row.id} />
      ))}
    </DatabaseBoxSmallStyled>
  );
};
