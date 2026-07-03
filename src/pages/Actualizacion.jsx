import React, { useState } from "react";
import "../styles/Actualizacion.css";

function Actualizacion() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
    <div>
<div className='panel'>
            <div className="contenido">
              <h3>¿Qué opina sobre esta página?</h3>

              <div className="fila">
                <span>¿Te gustó?</span>
                <div className="barra">
                  <div className="progreso" style={{ width: "27%" }}></div>
                </div>
                <span>26.98%</span>
              </div>

              <div className="fila">
                <span>¿Le falta algo?</span>
                <div className="barra">
                  <div className="progreso" style={{ width: "41%" }}></div>
                </div>
                <span>41.27%</span>
              </div>

              <div className="fila">
                <span>¿No te gustó?</span>
                <div className="barra">
                  <div className="progreso" style={{ width: "10%" }}></div>
                </div>
                <span>9.52%</span>
              </div>

              <div className="fila">
                <span>¿Está bien?</span>
                <div className="barra">
                  <div className="progreso" style={{ width: "22%" }}></div>
                </div>
                <span>22.22%</span>
              </div>

              <p><strong>63 votos totales</strong></p>

              <div className="navegacion">
                <a href="#">← Volver</a>
                <span>1</span>
                <a href="#">Siguiente →</a>
              </div>

              <p className="gracias">GRACIAS</p>
            </div>
          </div>

        </div>

    

    </>
  );
}

export default Actualizacion;
