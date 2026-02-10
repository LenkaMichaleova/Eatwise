import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import { Button } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
// import { DatabaseTable } from './components/DatabaseTable';
// import { DatabaseBoxSmall } from './components/DatabaseBoxSmall';
import {
  DatabaseContentStyled,
  DatabaseHeaderStylled,
  DatabaseStyled,
} from './styles/DatabaseStyles';
import { getAllMeals } from '../../services/mealsService';
import { DatabaseMealCard } from './components/DatabaseMealCard';

export const Database = () => {
  const mealsData = getAllMeals();

  return (
    <DatabaseStyled>
      <DatabaseHeaderStylled>
        <SectionTitle title="Databáze jídel" />
        <Button>
          <FilterListAltIcon fontSize="large" />
        </Button>
      </DatabaseHeaderStylled>
      <DatabaseContentStyled>
        {mealsData.map((meal) => (
          <DatabaseMealCard key={meal.id} data={meal} />
        ))}
      </DatabaseContentStyled>
    </DatabaseStyled>
  );
};
