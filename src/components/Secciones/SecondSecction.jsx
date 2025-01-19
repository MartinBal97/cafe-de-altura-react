import React from "react";
import SecVentajas from "../SecVentajas/SecVentajas";

export default function SecondSecction() {
  return (
    <section className="p-[3rem] mx-auto text-center bg-cover bg-center bg-[url('images/backgroundCards.jpeg')]">
      <h2 className="text-2xl text-white mb-4 fsTitle">
        Café con las mejores condiciones
      </h2>
      <div className="flex justify-center items-center">
        <SecVentajas
          title={"Recibe tu pedido sin preocuparte"}
          description={
            "Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana."
          }
          img={
            "images/ClipboardCheck.png"
          }
        />
        <SecVentajas
          title={"Envío en 24/48h"}
          description={
            "Pide tu café antes de las 12h y lo recibirás al día siguiente."
          }
          img={
            "images/Truck.png"
          }
        />
        <SecVentajas
          title={"Descuentos y beneficios"}
          description={
            "Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros."
          }
          img={
            "images/Gift.png"
          }
        />
      </div>
    </section>
  );
}
