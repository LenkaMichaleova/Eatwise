import { SectionTitle } from '../../components/SectionTitle';
import { DailyMenu } from './components/DailyMenu';
import { FoodMenuHeaderStylled, FoodMenuStyled } from './styles/foodMenuStyles';

export function Menu() {
  return (
    <FoodMenuStyled>
      <FoodMenuHeaderStylled>
        <SectionTitle title="Jídelníček" />
      </FoodMenuHeaderStylled>
      <DailyMenu />
    </FoodMenuStyled>
  );
}
