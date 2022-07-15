import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Vitrine, Apostar, Cotacao, Bichos} from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Vitrine />} />
        <Route path='/apostar' element={<Apostar />} />
        <Route path='/cotacao' element={<Cotacao />} />
        <Route path='/bichos' element={<Bichos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
