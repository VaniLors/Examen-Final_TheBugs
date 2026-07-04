import { useState } from 'react';
import escudo from '../carlosMedinaceli/Escudo.png';
import '../styles/Inicio.css';

function Inicio({ onEntrar }) {
  return (
    <div className="inicio-container">
      <div className="estrellas"></div>
      <img src={escudo} alt="Escudo Carlos Medinaceli" className="escudo-inicio" />
      <h1 className="bienvenida-texto">BIENVENIDOS!!!</h1>
      <button className="btn-entrar" onClick={onEntrar}>
        ENTRAR
      </button>
    </div>
  );
}

export default Inicio;