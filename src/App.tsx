import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import { Layout } from './components/Layout';
import { ErrorPage } from './pages/ErrorPage';
import { ROUTES } from './routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path={ROUTES.home} element={<div>Home Page</div>} />
            <Route path={ROUTES.profile} element={<div>Profil</div>} />
            <Route path={ROUTES.database} element={<div>Databáze jídel</div>} />
            <Route path={ROUTES.menu} element={<div>Jídelníček</div>} />
            <Route
              path={ROUTES.tables}
              element={<div>Kalorické tabulky</div>}
            />
            <Route
              path={ROUTES.countCalories}
              element={<div>Vyfoť jídlo a spočítej kalorie</div>}
            />
            <Route path={ROUTES.error} element={<ErrorPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
