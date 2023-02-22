import React,{useContext} from 'react'
import { ProductsContext } from '../App'
import Cards from '../components/Cards/Cards'
import CopyRight from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import SecondSecction from '../components/Secciones/SecondSecction'

export default function ShopPage() {

  const { products } = useContext(ProductsContext)

  return (
    <section>
            <h2 className="text-center my-12 [text-shadow:_2px_4px_3px_rgba(0,0,0,0.3)] text-[2rem] text-[#2a5b45]">Últimos origenes</h2>

            <div className="flex my-12 justify-around flex-wrap">
                {
                    products.map((product, i) => {
                        return (
                            <Cards _id={product._id} available={product.available} brand={product.brand} img_url={product.img_url} price={product.price} key={i} />
                        )
                    })
                }
            </div>
            
            <SecondSecction />
            <Footer />
            <CopyRight />
            
        </section>
  )
}
