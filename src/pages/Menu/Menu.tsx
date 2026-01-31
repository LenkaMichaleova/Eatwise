import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { getAllFoods } from '../../services/foodService';
import { DailyMenu } from './components/DailyMenu';
import { FoodMenuHeaderStylled, FoodMenuStyled } from './styles/foodMenuStyles';

export function Menu() {
  const foodData = getAllFoods();

  return (
    <FoodMenuStyled>
      <FoodMenuHeaderStylled>
        <SectionTitle title="Jídelníček" />
      </FoodMenuHeaderStylled>
      <DailyMenu data={foodData} />
    </FoodMenuStyled>
  );
}
