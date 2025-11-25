import { styled } from '@mui/material/styles';
import { SectionTitle } from '../../components/SectionTitle';
import { MealReader } from './components/MealReader';

const CountCaloriesStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  margin: '2rem auto',
  maxWidth: '1200px',
  width: '100%',
  gap: '1rem',
});

export function CountCalories() {
  return (
    <CountCaloriesStyled>
      <SectionTitle title="Vyfoť jídlo a spočítej kalorie" />
      <MealReader />
    </CountCaloriesStyled>
  );
}
