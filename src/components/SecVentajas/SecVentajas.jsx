import React from 'react'

export default function SecVentajas({ img, title, description }) {
    return (
        <div className="p-[0.8rem] flex flex-col justify-center items-center bg-[#f7f5f3] rounded-lg w-[33.3%] m-3">
            <div className='my-2 bg-[#2a5b45] inline-block p-8 rounded-2xl'>
                <img src={img} alt="camioncito" />
            </div>
            <h3 className="font-semibold my-2">{title}</h3>
            <p className="fsCardText my-2">{description}</p>
        </div>
    )
}
