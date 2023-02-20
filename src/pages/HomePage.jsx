import React from 'react'
import Button from '../components/Button/Button'

export default function Home() {
  return (
    <section className='bg-[#e4dfd8] px-[2.9rem] py-[3rem]'>
      <div className="flex m-4">
        <div className="flex flex-column justify-center max-w-[50%]">
          <h3 className="mainSubtitle">De la planta a tu taza</h3>
          <h2 className="mainTitle">El mejor café del mundo, ahora en tu casa.</h2>

          <p className="mainText">
            Trabajamos con agricultores de todo el mundo para seleccionar los
            mejores granos de café y que puedas viajar desde la comodidad de tu
            hogar.
          </p>

          <div className="mainButton">
            <Button url={'/'} content={'Descubrir orígenes'} color={'bg-[#515051]'} />
            <Button url={'Shop'} content={'Comprar café'} color={'bg-[#515051]'} />
          </div>
        </div>

        <img className="rounded-[20px] shadow-xl" src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/heroImage.png?alt=media&token=2dc09519-b785-45c3-b067-7d7479f7136c" alt="heroImage" />
      </div>
    </section>
  )
}
