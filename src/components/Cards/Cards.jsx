import React from 'react'


export default function Cards({ _id, img_url, available, price, brand }) {

    return (
        <div id={_id} className="text-center p-6 rounded-lg m-5 border-solid border-[1px] border-[#e3ded7] shadow-[rgba(0,0,0,0.1)0_4px_12px] transition ease-in-out delay-250 hover:shadow-[rgba(0,0,0,0.35)_0_5px_15px] hover:bg-[#e4dfd8]">
            <img src={img_url} alt={brand} />
            <h3 className='my-4'>{brand}</h3>
            <p className='my-4'>€ {price},00 €</p>
            <button
                className="transition ease-in-out delay-250 bg-[#2a5b45] text-white"
                disabled={(available) ? false : true}
            >Añadir</button>
        </div>
    )
}