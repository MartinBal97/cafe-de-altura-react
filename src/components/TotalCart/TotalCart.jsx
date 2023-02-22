import React from 'react'
import Button from '../Button/Button'

export default function TotalCart() {
    return (
        <div className="bg-[#f7f5f3] p-6 h-[fit-content]">
            <h3 className="negritas">Total del carrito</h3>
            <hr className='my-2'/>
            <div>
                <div className="totCestaPrecios flex justify-between">
                    <p className='mb-2'>SUBTOTAL</p>
                    <p className="totCestaSubtotal negritas mb-2">0 €</p>
                </div>
                <div className="totCestaPrecios flex justify-between">
                    <p className='mb-2'>ENVÍO</p>
                    <p className="envioPrice negritas mb-2">GRATIS</p>
                </div>
            </div>
            <hr />
            <div>
                <div className="totCestaPrecios flex justify-between">
                    <p className="negritas mb-2">TOTAL</p>
                    <p className="totCestaTotal negritas mb-2">0 €</p>
                </div>
                <div className="totCestaPrecios flex justify-between">
                    <p className='mb-2'></p>
                    <p className="ivaDetail text-xs text-[#515051] mb-2">Incluye <span className="ivaTotal">0,00</span> de IVA</p>
                </div>
            </div>
            <div className="totalCestaButtons mt-4">
                <button className="btnCheckout">Ir a checkout</button>
                <Button url={'/Shop'} bgColor={`bg-[#2a5b45]`} color={'text-white'} content={'Seguir comprando'}/>
            </div>
        </div>
    )
}
