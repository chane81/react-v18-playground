import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutoBatching from './pages/AutoBatching';
import Transition from './pages/Transition';
import TransitionV2 from './pages/Transition-v2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/autoBatching' element={<AutoBatching />} />
        <Route path='/transition' element={<Transition />} />
        <Route path='/transition-v2' element={<TransitionV2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
