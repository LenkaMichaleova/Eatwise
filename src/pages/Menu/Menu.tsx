import { useState, useEffect } from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { getAllFoods } from '../../services/foodService';
import { generateDailyMenu } from './utils/generateDailyMenu';
import { DailyMenu } from './components/DailyMenu';
import {
  FoodMenuContentStylled,
  FoodMenuHeaderStylled,
  FoodMenuStyled,
} from './styles/foodMenuStyles';
import type { Food } from '../../foodData';
import { DAYS, type Days, type WeeklyMenu } from '../../models/weeklyMenu';
import { getAllMealPlans, postMealPlan } from '../../services/mealPlanService';

export const Menu = () => {
  const foodData = getAllFoods();

  const generateInitialWeeklyMenu = (data: Food[]): WeeklyMenu => {
    return {
      Pondělí: generateDailyMenu(data),
      Úterý: generateDailyMenu(data),
      Středa: generateDailyMenu(data),
      Čtvrtek: generateDailyMenu(data),
      Pátek: generateDailyMenu(data),
      Sobota: generateDailyMenu(data),
      Neděle: generateDailyMenu(data),
    };
  };

  const [weeklyMenu, setWeeklyMenu] = useState<WeeklyMenu>(() => {
    const saved = getAllMealPlans();
    if (!saved) {
      return generateInitialWeeklyMenu(foodData);
    }
    return saved;
  });

  const handleDayMenuChange = (day: Days) => {
    setWeeklyMenu((prev) => ({
      ...prev,
      [day]: generateDailyMenu(foodData),
    }));
  };
  // TODO : [day]: generateDailyMenu(filterUsed(foodData, prev))  -> to avoid duplicates in week

  useEffect(() => {
    postMealPlan(weeklyMenu);
  }, [weeklyMenu]);

  return (
    <FoodMenuStyled>
      <FoodMenuHeaderStylled>
        <SectionTitle title="Jídelníček" />
      </FoodMenuHeaderStylled>
      <FoodMenuContentStylled>
        {DAYS.map((day) => (
          <DailyMenu
            key={day}
            day={day}
            menu={weeklyMenu[day]}
            onMenuChange={() => handleDayMenuChange(day)}
          />
        ))}
      </FoodMenuContentStylled>
    </FoodMenuStyled>
  );
};
