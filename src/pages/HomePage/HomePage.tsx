import { NavCard } from './components/NavCard';
import { ROUTES } from '../../constants/routes';
import { HomePageStyled } from './styles/homePageStyles';

export function HomePage() {
  return (
    <HomePageStyled>
      <NavCard path={ROUTES.database} title="Databáze jídel" />
      <NavCard path={ROUTES.menu} title="Jídelníček" />
      <NavCard path={ROUTES.tables} title="Kalorické tabulky" />
      <NavCard path={ROUTES.countCalories} title="Vyfoť jídlo" />
    </HomePageStyled>
  );
}
