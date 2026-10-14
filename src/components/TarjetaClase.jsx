import { useState } from "react";

function TarjetaClase({ clase }) {
  

  return (
    <article className="tarjeta">
      <img className="tarjeta__imagen" src={clase.imagen} alt={clase.titulo} />
      <div className="tarjeta__cuerpo">
        <h3 className="tarjeta__titulo">{clase.titulo}</h3>
        <p className="tarjeta__descripcion">{clase.descripcion}</p>
        <button
          >
            "Suscribirse"
        </button>
      </div>
    </article>
  );
}

export default TarjetaClase;
