import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/sign-up' element={<Products />} />
          <Route path='/products' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
