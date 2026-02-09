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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DatabaseDetail } from './pages/DatabaseDetail/DatabaseDetail';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/cs';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="cs">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Layout>
              <Routes>
                <Route path={ROUTES.home} element={<HomePage />} />
                <Route path={ROUTES.profile} element={<div>Profil</div>} />
                <Route path={ROUTES.database} element={<Database />} />
                <Route
                  path={ROUTES.databaseDetail}
                  element={<DatabaseDetail />}
                />
                <Route path={ROUTES.menu} element={<Menu />} />
                <Route path={ROUTES.tables} element={<Tables />} />
                <Route
                  path={ROUTES.countCalories}
                  element={<CountCalories />}
                />
                <Route path={ROUTES.error} element={<ErrorPage />} />
              </Routes>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </QueryClientProvider>
  );
};
