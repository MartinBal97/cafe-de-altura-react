import React, { useContext } from 'react'
import NavLink from '../NavLink/NavLink'
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import { CartContext } from '../../App';

import { getAuth, signOut } from "firebase/auth";

export default function Header({ user }) {

    const {cart,setCart,setUsuario} = useContext(CartContext);

    const sumaCantProductos = (cart) => {
        let cantProducts = cart.reduce((acc, e) => {
            acc += e.quantity;
            return acc;
        }, 0);
        return cantProducts;
    };

    const logOut = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            
            setUsuario(undefined)
            setCart([])
            
        }).catch((error) => {
            console.log(error)
            
        });
    }

    return (
        <header className=' flex items-center justify-between bg-[#2B2A2B] text-white'>
            <Link className="mx-[0.5rem]" to='/'>
                <div className="flex items-center mr-[2rem]">
                    <h1 className="text-[23.46px] text-left my-[1rem] mr-[0.5rem] ml-[2rem]">cafedealtura.com</h1>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/cafecito.png?alt=media&token=baa91583-ab37-4ea3-b4d9-2710fd8221b7" alt="logoCafe" className="w-[20.29px]" />
                    </div>
                </div>
            </Link>
            <nav>
                <ul className='flex'>
                    <NavLink path='Shop' nameLink='Tienda' />
                    <NavLink path='/' nameLink='Suscripción' />
                    <NavLink path='/' nameLink='Para empresas' />
                    <NavLink path='/' nameLink='Sobre Nosotros' />
                    <NavLink path='/' nameLink='Contacto' />
                </ul>
            </nav>
            <div className="flex">
                <div className="flex items-center">
                    <div>
                        <img className="mr-[0.8rem]" src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/telefono.png?alt=media&token=cb995659-472f-4668-b9b0-38d1d916cb7c" alt="telefono" />
                    </div>
                    <p className="mr-[0.8rem]">+34 919 49 05 18</p>
                </div>
                {
                    user ?
                        <div className='flex items-center'>
                            <p className='mx-2'>Hola {user.email}</p>
                            <button className='bg-[#515051]' onClick={logOut}>Cerrar sesion</button>
                        </div>
                        :
                        <div>
                            <Button url={'SignIn'} bgColor={'bg-[#515051]'} color={'text-white'} content={'Iniciar sesion'} />
                            <Button url={'SignUp'} bgColor={'bg-[#515051]'} color={'text-white'} content={'Registrarse'} />
                        </div>
                }
            </div>
            <div>
                <Link className="flex items-center" to="Cesta">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/carrito.png?alt=media&token=3519a4ec-0e26-4639-bc41-e40e851dfbca" alt="carrito" className="p-[1rem] mr-[0.6rem]" />
                    <p><span className="mr-[2rem]">{sumaCantProductos(cart)}</span></p>
                </Link>
            </div>
        </header>
    )
}
