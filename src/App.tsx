import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import { Layout } from './components/Layout/Layout';
import { ErrorPage } from './pages/ErrorPage';
import { ROUTES } from './constants/routes';
import { HomePage } from './pages/HomePage/HomePage';
import { Database } from './pages/Database/Database';
import { Menu } from './pages/Menu/Menu';
import { Tables } from './pages/Tables/Tables';
import { CountCalories } from './pages/CountCalories/CountCalories';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.profile} element={<div>Profil</div>} />
            <Route path={ROUTES.database} element={<Database />} />
            <Route path={ROUTES.menu} element={<Menu />} />
            <Route path={ROUTES.tables} element={<Tables />} />
            <Route path={ROUTES.countCalories} element={<CountCalories />} />
            <Route path={ROUTES.error} element={<ErrorPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
