import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Nabbar/Navbar';
import {  Route, Routes, } from 'react-router-dom';
import Home from './pages/home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  );
};

export default App;
