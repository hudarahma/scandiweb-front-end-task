import React from 'react'
import './App.css';
import Home from './pages/Home';
import Pdp from './pages/Pdp';
import Cart from './pages/Cart';
import ContextProvider from './Context';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

//  const { categoryName } = useContext(MyContext);
  return (
    

      <ContextProvider>
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/product/:id' element={<Pdp />}/>
              <Route path='/order' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </div>
      
      </ContextProvider>
  

  );
}

export default App;
