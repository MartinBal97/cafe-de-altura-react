import React from 'react'
import { Link } from 'react-router-dom'

export default function FifthSection() {
    return (
        <section className="px-[40px] py-[48px] bg-[#f7f5f3]">
            <div className="flex m-[0.5rem]">
                <div className="flex flex-col justify-center max-w-[50%]">
                    <h3 className="text-[#2a5b45] font-semibold text-3xl py-4">Pruébalo en nuestro coffee shop</h3>
                    <p className="fsText py-4">Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
                    <div className="flex items-center py-4">
                        <Link to="/">Cómo llegar</Link>
                        <img className='ml-3' src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/flechaRight.png?alt=media&token=12e038e9-4276-4907-972a-0084f7de6fe7" alt="" />
                    </div>
                </div>
                <img className="fsImage" src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/fotoBar.png?alt=media&token=464f9bc1-9f8b-490a-846c-73dc997e1e20" alt="foto bar" />
            </div>
        </section>
    )
}