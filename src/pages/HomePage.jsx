import React, { useContext } from 'react'
import { ProductsContext } from '../App'

import FirstSection from '../components/Secciones/FirstSection'
import SecondSecction from '../components/Secciones/SecondSecction'
import ThirdSection from '../components/Secciones/ThirdSection'
import FourthSection from '../components/Secciones/FourthSection'
import FifthSection from '../components/Secciones/FifthSection'
import SixthSection from '../components/Secciones/SixthSection'


export default function HomePage() {

  const { products } = useContext(ProductsContext)

  return (
    <>
      <FirstSection />
      <SecondSecction />
      <ThirdSection products={products} />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </>
  )
}
