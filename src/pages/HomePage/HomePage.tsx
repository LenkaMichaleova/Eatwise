import { styled } from '@mui/material/styles';
import { NavCard } from './components/NavCard';
import { ROUTES } from '../../constants/routes';

const HomePageStyled = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '2rem auto',
  maxWidth: '1200px',
  width: '100%',
  gap: '1rem',
  '@media(max-width: (960px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export function HomePage() {
  return (
    <HomePageStyled>
      <NavCard path={ROUTES.database} title="Databáze" />
      <NavCard path={ROUTES.menu} title="Jídelníček" />
      <NavCard path={ROUTES.tables} title="Kalorické tabulky" />
      <NavCard path={ROUTES.countCalories} title="Vyfoť jídlo" />
    </HomePageStyled>
  );
}
