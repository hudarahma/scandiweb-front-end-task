import React, { useContext } from 'react'
import './App.css';
import Home from './pages/Home';
import Pdp from './pages/Pdp';
import Cart from './pages/Cart';
import ContextProvider from './Context';
import {  ApolloProvider } from '@apollo/client';
import { MyContext } from './Context';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

 
  return (
    

      <ContextProvider>
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/product' element={<Pdp />}/>
              <Route path='/order' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </div>
      
      </ContextProvider>
  

  );
}

export default App;
