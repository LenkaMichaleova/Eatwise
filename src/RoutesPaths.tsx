import { Route } from 'react-router';

export const RoutesPaths = () => {
  return (
    <>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/profile" element={<div>Profil</div>} />
      <Route path="/database" element={<div>Databáze jídel</div>} />
      <Route path="/menu" element={<div>Jídelníček</div>} />
      <Route path="/tables" element={<div>Kalorické tabulky</div>} />
      <Route
        path="/count-calories"
        element={<div>Vyfoť jídlo a spočítej kalorie</div>}
      />{' '}
      Ï
    </>
  );
};
