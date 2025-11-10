import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Eatwise</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
