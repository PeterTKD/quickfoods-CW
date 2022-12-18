import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchpage from './components/Search/Searchpage';
import Menupage from './components/Menu/Menupage';
import ShoppingPage from './components/Shopping/ShoppingPage';
import IngrediantsSearch from './components/Ingredients/IngrediantsSearch';
import { recipes } from './Data/data'

//<Route path='/' element={<Navbar />} />

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/search' element={<Searchpage details={recipes} />} />
        <Route path='/menu' element={<Menupage />} />
        <Route path='/shopping' element={<ShoppingPage />} />
        <Route path='/ingrediantsSearch' element={<IngrediantsSearch />} />

      </Routes>
    </BrowserRouter>
  );
}