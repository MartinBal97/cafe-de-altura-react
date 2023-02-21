import React from 'react'
import Cards from '../Cards/Cards'

export default function ThirdSection({ products }) {

    return (
        <section>
            <h2 className="text-center my-12 [text-shadow:_2px_4px_3px_rgba(0,0,0,0.3)] text-[2rem] text-[#2a5b45]">Novedades</h2>

            <div className="flex my-12 justify-around flex-wrap">
                {
                    products.slice(0,4).map((product, i) => {
                        return (
                            <Cards _id={product._id} available={product.available} brand={product.brand} img_url={product.img_url} price={product.price} key={i}/>
                        )
                    })
                } 
            </div>

            <div className="flex justify-center items-center my-12">
                <a className='text-sm mr-3 [text-shadow:_2px_4px_3px_rgba(0,0,0,0.3)]' href="./pages/shop.html">Ver todos</a>
                <img src="https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-112c9.appspot.com/o/flechaRight.png?alt=media&token=12e038e9-4276-4907-972a-0084f7de6fe7" alt="flechaRight" />
            </div>
        </section>
    )
}
