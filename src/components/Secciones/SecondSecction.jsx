import React from 'react'
import SecVentajas from '../SecVentajas/SecVentajas'

export default function SecondSecction() {
  return (
    <section className="p-[3rem] mx-auto text-center bg-cover bg-center bg-[url('https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/cafeDeFondo.jpeg?alt=media&token=fcd3ad9f-2dc7-4a5a-9246-64ff0beca493')]">
        <h2 className="text-2xl text-white mb-4 fsTitle">Café con las mejores condiciones</h2>
        <div className='flex justify-center items-center'>
          <SecVentajas title={'Recibe tu pedido sin preocuparte'} description={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'} img={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/blockDeNotas.png?alt=media&token=31edbded-ad72-4183-8c6f-866990d019b4"} />
          <SecVentajas title={'Envío en 24/48h'} description={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'} img={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/camioncito.png?alt=media&token=55f3c594-c268-4671-ab8c-ca3baeb5e349"} />
          <SecVentajas title={'Descuentos y beneficios'} description={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'} img={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/cajaRegalo.png?alt=media&token=34c6679d-e5d9-43f9-811d-d2afaacdcdbd"} />
        </div>
      </section>
  )
}
