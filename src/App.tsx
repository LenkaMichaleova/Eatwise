import { BrowserRouter, Routes } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import { Layout } from './components/Layout';
import { RoutesPaths } from './RoutesPaths';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <RoutesPaths />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
