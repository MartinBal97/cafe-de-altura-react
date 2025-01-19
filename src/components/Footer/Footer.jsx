import React from "react";
import NavLink from "../NavLink/NavLink";

export default function Footer() {
  return (
    <footer className="bg-[#1f1815] text-[#ffffff] px-[2.5rem] py-[1.5rem]">
      <div className="flex items-center mb-6">
        <h2 className="text-[1.7rem] mr-2">cafedealtura.com</h2>
        <img
          src="images/coffeBlack.png"
          alt="cafeIcon"
        />
      </div>

      <div className="flex">
        <div className="w-[50%]">
          <h3 className="text-[1.3rem]">Te ayudamos en</h3>
          <div className="flex items-center bg-[#515051] py-6 px-12 rounded my-4 w-[fit-content]">
            <img
              src="images/Phone.png"
              alt=""
            />
            <p className="ml-4">+34 919 49 05 18</p>
          </div>
          <div className="flex items-center bg-[#515051] py-6 px-12 rounded my-4 w-[fit-content]">
            <img
              src="images/Mail.png"
              alt=""
            />
            <p className="ml-4">hola@cafedealtura.com</p>
          </div>
        </div>
        <div className="w-[50%] flex">
          <nav className="flex flex-col no-underline text-[#ffffff] w-[50%] list-none">
            <NavLink path={"/Shop"} nameLink={"Tienda"} /> <br />
            <NavLink path={"/"} nameLink={"Suscripción"} /> <br />
            <NavLink path={"/"} nameLink={"Para empresas"} /> <br />
            <NavLink path={"/"} nameLink={"Sobre Nosotros"} /> <br />
            <NavLink path={"/"} nameLink={"Contacto"} /> <br />
          </nav>
          <nav className="flex flex-col no-underline text-[#ffffff] list-none">
            <NavLink path={"/"} nameLink={"Política de privacidad"} /> <br />
            <NavLink path={"/"} nameLink={"Política de cookies"} /> <br />
            <NavLink path={"/"} nameLink={"Términos y condiciones"} /> <br />
          </nav>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
