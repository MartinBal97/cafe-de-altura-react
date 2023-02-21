import React from 'react'
import NavLink from '../NavLink/NavLink'

export default function Footer() {
  return (
    <footer className='bg-[#1f1815] text-[#ffffff] px-[2.5rem] py-[1.5rem]'>
        <div className="flex items-center mb-6">
            <h2 className='text-[1.7rem] mr-2'>cafedealtura.com</h2>
            <img src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/cafecito.png?alt=media&token=baa91583-ab37-4ea3-b4d9-2710fd8221b7" alt="cafeIcon" />
        </div>

        <div className="flex">
            <div className="w-[50%]">
                <h3 className='text-[1.3rem]'>Te ayudamos en</h3>
                <div className='flex items-center bg-[#515051] py-6 px-12 rounded my-4 w-[fit-content]'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/telefono.png?alt=media&token=cb995659-472f-4668-b9b0-38d1d916cb7c" alt="" />
                    <p className='ml-4'>+34 919 49 05 18</p>
                </div>
                <div className='flex items-center bg-[#515051] py-6 px-12 rounded my-4 w-[fit-content]'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/emailBlanco.png?alt=media&token=d6ad112c-d705-4fc3-897f-cfd1288c96c1" alt="" />
                    <p className='ml-4'>hola@cafedealtura.com</p>
                </div>
            </div>
            <div className="w-[50%] flex">
                <nav className="flex flex-col no-underline text-[#ffffff] w-[50%] list-none">
                    <NavLink path={"Shop"} nameLink={'Tienda'}/> <br />
                    <NavLink path={"/"} nameLink={'Suscripción'}/> <br />
                    <NavLink path={"/"} nameLink={'Para empresas'}/> <br />
                    <NavLink path={"/"} nameLink={'Sobre Nosotros'}/> <br />
                    <NavLink path={"/"} nameLink={'Contacto'}/> <br />
                </nav>
                <nav className="flex flex-col no-underline text-[#ffffff] list-none">
                    <NavLink path={"/"} nameLink={'Política de privacidad'}/>  <br />
                    <NavLink path={"/"} nameLink={'Política de cookies'}/> <br />
                    <NavLink path={"/"} nameLink={'Términos y condiciones'}/> <br />
                </nav>
                <div></div>
            </div>
        </div>
    </footer>
  )
}
