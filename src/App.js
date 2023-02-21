import './App.css';
import React, { useState, useEffect, createContext } from "react";
import { firebaseConfig } from "./fb";
import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'

const app = initializeApp(firebaseConfig);

export const ProductsContext = createContext()

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://cafe-de-altura-api.vercel.app/api/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, []);

  return (
    <>
      <ProductsContext.Provider value={{products, setProducts}}>
        <BrowserRouter>

          <Header />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='Shop' element={<ShopPage />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </ProductsContext.Provider>
    </>
  );
}


