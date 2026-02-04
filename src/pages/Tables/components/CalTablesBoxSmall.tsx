import type { Ingredient } from '../models/Ingredient';
import { CalTablesBoxSmallStyled } from '../styles/calTablesStyles';
import { FoodCardSmall } from './FoodCardSmall';

export const CalTablesBoxSmall = ({ data }: { data: Ingredient[] }) => {
  return (
    <CalTablesBoxSmallStyled>
      {data.map((row) => (
        <FoodCardSmall row={row} key={row.id} />
      ))}
    </CalTablesBoxSmallStyled>
  );
};
