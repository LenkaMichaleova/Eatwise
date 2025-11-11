import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import { Layout } from './components/Layout';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/profile" element={<div>Profil</div>} />
            <Route path="/database" element={<div>Databáze jídel</div>} />
            <Route path="/menu" element={<div>Jídelníček</div>} />
            <Route path="/tables" element={<div>Kalorické tabulky</div>} />
            <Route
              path="/count-calories"
              element={<div>Vyfoť jídlo a spočítej kalorie</div>}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
