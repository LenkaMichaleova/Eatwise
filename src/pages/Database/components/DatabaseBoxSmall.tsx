import { rows } from '../rows';
import { DatabaseBoxSmallStyled } from '../styles/DatabaseStyles';
import { FoodCardSmall } from './FoodCardSmall';

export const DatabaseBoxSmall = () => {
  return (
    <DatabaseBoxSmallStyled>
      {rows.map((row) => (
        <FoodCardSmall row={row} key={row.id} />
      ))}
    </DatabaseBoxSmallStyled>
  );
};

// TODO fetch rows from server
