
import './App.css';
import Home from './pages/Home';
import Pdp from './pages/Pdp';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product' element={<Pdp />}/>
          <Route path='/order' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
