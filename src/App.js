import { initializeApp } from "firebase/app";
import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { firebaseConfig } from "./fb";

import { doc, getFirestore, setDoc } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import CestaPage from "./pages/CestaPage";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const ProductsContext = createContext();
export const CartContext = createContext();

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://cafe-de-altura-lovat.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const updateCart = async () => {
    await setDoc(doc(db, "user", "added"), { cart });
  };

  useEffect(() => {
    updateCart();
  }, [cart]);

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <BrowserRouter>
            <Header cart={cart} />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="cesta" element={<CestaPage />} />
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}
