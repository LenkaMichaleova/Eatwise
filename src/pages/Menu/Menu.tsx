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
import type { WeeklyMenu } from '../../models/weeklyMenu';

const DAYS = [
  'Pondělí',
  'Úterý',
  'Středa',
  'Čtvrtek',
  'Pátek',
  'Sobota',
  'Neděle',
] as const;
const STORAGE_KEY = 'weeklyMenu';

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

  const loadSavedWeeklyMenu = (): WeeklyMenu | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  };

  const [weeklyMenu, setWeeklyMenu] = useState<WeeklyMenu>(() => {
    const saved = loadSavedWeeklyMenu();
    if (!saved) {
      return generateInitialWeeklyMenu(foodData);
    }
    return saved;
  });

  const handleDayMenuChange = (
    day: (typeof DAYS)[number],
    menu: ReturnType<typeof generateDailyMenu>
  ) => {
    setWeeklyMenu((prev) => ({
      ...prev,
      [day]: menu,
    }));
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(weeklyMenu));
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
            data={foodData}
            day={day}
            menu={weeklyMenu[day]}
            onMenuChange={(menu) => handleDayMenuChange(day, menu)}
          />
        ))}
      </FoodMenuContentStylled>
    </FoodMenuStyled>
  );
};
