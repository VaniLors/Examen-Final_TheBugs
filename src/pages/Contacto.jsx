import React from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-header">
        <span>Contacto</span>
      </div>

      <form className="contacto-form">
        <div className="fila">
          <label>Tu dirección de correo electrónico:</label>
          <input type="email" />
        </div>

        <div className="fila">
          <label>Tu nombre:</label>
          <input type="text" />
        </div>

        <div className="fila">
          <label>Asunto:</label>
          <input type="text" />
        </div>

        <div className="fila mensaje">
          <label>Tu mensaje:</label>
          <textarea rows="8"></textarea>
        </div>

        <div className="boton">
          <button type="submit">Enviar mensaje</button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;