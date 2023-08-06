import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Basket from './pages/basket';
import Completed from './pages/completed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
