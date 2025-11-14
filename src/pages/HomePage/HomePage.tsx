import { styled } from '@mui/material/styles';
import { NavCard } from './components/NavCard';

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
      <NavCard path="database" title="Databáze" />
      <NavCard path="menu" title="Jídelníček" />
      <NavCard path="tables" title="Kalorické tabulky" />
      <NavCard path="count-calories" title="Vyfoť jídlo" />
    </HomePageStyled>
  );
}
