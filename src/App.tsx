import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutoBatching from './pages/AutoBatching';
import Transition from './pages/Transition';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/autoBatching' element={<AutoBatching />} />
        <Route path='/transition' element={<Transition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
