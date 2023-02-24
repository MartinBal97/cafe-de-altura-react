// IMPORTACIONES DE REACT
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect, createContext } from "react";

// IMPORTACIONES DE FIREBASE
import { firebaseConfig } from "./fb";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc,getDoc} from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";

//IMPORTACION DE COMPONENTES
import Header from './components/Header/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import CestaPage from './pages/CestaPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

// LLAMADO DE FUNCIONES REQUERIDAS POR FIREBASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// CREACION DE CONTEXTO
export const ProductsContext = createContext()
export const CartContext = createContext()

export default function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [usuario, setUsuario] = useState('')
  // const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    
    onAuthStateChanged(auth, async (user) => {
      if (user) {
      try {
        await getDoc(doc(db, "user", user.uid))
        .then(res => res.data())
        .then(res => setCart(res.cart))
      } catch {
        setCart([])
      }
        
        setUsuario(user)
        // setIsLogged(true)
        // ...
      } else {
        setCart([])
      }
    });
    
  }, []);

  useEffect(() => {
    fetch('https://cafe-de-altura-api.vercel.app/api/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, []);

  
  const updateCart = async () => {
    // EN "user" VAMOS A PONER EL ID DEL USUARIO PARA CUAND OINICIE SESION RECUPERE LO QUE TENIA EN EL CARRITO
    try {
      await setDoc(doc(db, "user", usuario.uid), { cart });
    } catch {
      
    }
  }

  useEffect(() => {
    updateCart()
  }, [cart]);

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <CartContext.Provider value={{ cart, setCart, usuario, setUsuario}}>
          <BrowserRouter>

            <Header user={usuario}  cart={cart} />

            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='Shop' element={<ShopPage />} />
              <Route path='Cesta' element={<CestaPage />} />

              {/* SIGN IN / SIGN UP */}
              <Route path='SignIn' element={ <SignIn /> } />
              <Route path='SignUp' element={ <SignUp /> } />
            </Routes>

          </BrowserRouter>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}


