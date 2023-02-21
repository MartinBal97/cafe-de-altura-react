import React from 'react'
import Button from '../Button/Button'

export default function FirstSection() {
  return (
    <section className='bg-[#e4dfd8] px-[2.9rem] py-[3rem]'>
    <div className="flex m-4 [text-shadow:_2px_4px_3px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col justify-center max-w-[50%] py-4">
        <h3 className="mainSubtitle py-4 text-[#2a5b45] text-[18px]">De la planta a tu taza</h3>
        <h2 className="mainTitle text-[40px] py-4 font-semibold ">El mejor café del mundo, ahora en tu casa.</h2>

        <p className="mainText py-4">Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tuhogar.</p>

        <div className="mainButton py-4">
          <Button url={'/'} content={'Descubrir orígenes'} color={'text-white'} bgColor={'bg-[#1f1815]'} />
          <Button url={'Shop'} content={'Comprar café'} color={'text-white'} bgColor={'bg-[#2a5b45]'} />
        </div>
      </div>

      <img className="rounded-[20px] shadow-xl mx-[auto]" src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/heroImage.png?alt=media&token=2dc09519-b785-45c3-b067-7d7479f7136c" alt="heroImage" />
    </div>
  </section>
  )
}
