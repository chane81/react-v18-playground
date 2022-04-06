import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutoBatching from './pages/AutoBatching';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/autoBatching' element={<AutoBatching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
