import React, { useContext } from "react";
import { CartContext } from "../../App";

export default function Cards({ _id, img_url, available, price, brand }) {
    const { cart, setCart } = useContext(CartContext);

    function AddToCart(e, properties) {
        let currentvalue = {
            _id: _id,
            img_url: img_url,
            available: available,
            price: price,
            brand: brand,
            quantity: 1,
        };

        e.target.innerText = "Agregado !";

        setTimeout(() => {
            e.target.innerText = "Añadir";
        }, 700);

        if (cart.every((e) => e._id !== currentvalue._id)) {
            setCart((prev) => [...prev, currentvalue]);
        } else {
            setCart((prev) => {
                let repetido = prev.find((e) => e._id === currentvalue._id);
                repetido.quantity++;
                return [...prev];
            });
        }
    }

    let properties;
    available
        ? (properties = ["", "Añadir"])
        : (properties = ["opacity-50", "Agotado"]);

    return (
        <div id={_id} className={properties[0] + " text-center p-6 rounded-lg m-5 border-solid border-[1px] border-[#e3ded7] shadow-[rgba(0,0,0,0.1)0_4px_12px] transition ease-in-out delay-250 hover:shadow-[rgba(0,0,0,0.35)_0_5px_15px] hover:bg-[#e4dfd8]"}>
            <img src={img_url} alt={brand} />
            <h3 className="my-4">{brand}</h3>
            <p className="my-4">€ {price},00 €</p>
            <button
                className="w-[8rem] hover:scale-105 transition ease-in-out delay-250 bg-[#2a5b45] text-white"
                disabled={available ? false : true}
                onClick={AddToCart}
            >
                {properties[1]}
            </button>
        </div>
    );
}
