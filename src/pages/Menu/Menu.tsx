import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { getAllFoods } from '../../services/foodService';
import { DailyMenu } from './components/DailyMenu';
import {
  FoodMenuContentStylled,
  FoodMenuHeaderStylled,
  FoodMenuStyled,
} from './styles/foodMenuStyles';

export function Menu() {
  const foodData = getAllFoods();

  return (
    <FoodMenuStyled>
      <FoodMenuHeaderStylled>
        <SectionTitle title="Jídelníček" />
      </FoodMenuHeaderStylled>
      <FoodMenuContentStylled>
        <DailyMenu data={foodData} day="Pondělí" />
        <DailyMenu data={foodData} day="Úterý" />
        <DailyMenu data={foodData} day="Středa" />
        <DailyMenu data={foodData} day="Čtvrtek" />
        <DailyMenu data={foodData} day="Pátek" />
        <DailyMenu data={foodData} day="Sobota" />
        <DailyMenu data={foodData} day="Neděle" />
      </FoodMenuContentStylled>
    </FoodMenuStyled>
  );
}
