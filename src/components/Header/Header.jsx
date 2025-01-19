import React from "react";
import NavLink from "../NavLink/NavLink";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function Header({ cart }) {
  const sumaCantProductos = (cart) => {
    let cantProducts = cart.reduce((acc, e) => {
      acc += e.quantity;
      return acc;
    }, 0);
    return cantProducts;
  };

  return (
    <header className=" flex items-center justify-between bg-[#2B2A2B] text-white">
      <Link className="mx-[0.5rem]" to="/">
        <div className="flex items-center mr-[2rem]">
          <h1 className="text-[23.46px] text-left my-[1rem] mr-[0.5rem] ml-[2rem]">
            cafedealtura.com
          </h1>
          <div>
            <img
              src="/images/coffeBlack.png"
              alt="logoCafe"
              className="w-[20.29px]"
            />
          </div>
        </div>
      </Link>
      <nav>
        <ul className="flex">
          <NavLink path="Shop" nameLink="Tienda" />
          <NavLink path="Suscripción" nameLink="Suscripción" />
          <NavLink path="Para empresas" nameLink="Para empresas" />
          <NavLink path="Sobre Nosotros" nameLink="Sobre Nosotros" />
          <NavLink path="Contacto" nameLink="Contacto" />
        </ul>
      </nav>
      <div className="flex">
        <div className="flex items-center">
          <div>
            <img
              className="mr-[0.8rem]"
              src="/images/Phone.png"
              alt="telefono"
            />
          </div>
          <p className="mr-[0.8rem]">+34 919 49 05 18</p>
        </div>
        <Button url={"/"} content={"Iniciar sesión"} bgColor={"bg-[#515051]"} />
      </div>
      <div>
        <Link className="flex items-center" to="Cesta">
          <img
            src="/images/Carr.png"
            alt="carrito"
            className="p-[1rem] mr-[0.6rem]"
          />
          <p>
            <span className="mr-[2rem]">{sumaCantProductos(cart)}</span>
          </p>
        </Link>
      </div>
    </header>
  );
}
