import '../styles/NoticiaDeOro.css';
import imgdeoro from "../img-oro/imgdeoro.png";

function NoticiaDeOro() {
  return (
    <div className="panel">
      <div className="contenido">

        <h2>FIRMA COMISIÓN DE EX ALUMNOS</h2>

        <h3>NOTICIAS</h3>

        <h3>INTERNAS</h3>

        <div className="seccion">
          <p>
            viernes gran caravana y desfile de carros alegóricos
            conmemorando las
          </p>

          <p className="destacado">
            BODAS DE ORO DEL MAJESTUOSO
          </p>

          <p className="destacado">
            COLEGIO CARLOS MEDINACELI
          </p>

          <p>¡Imperdible!</p>

          <p>
            CONCENTRACIÓN EN LA PLAZA ESPAÑA A HORAS 18:00
          </p>

          <p>
            RECORRIDO POR DIFERENTES CALLES DE NUESTRA
          </p>

          <p>ÍNCLITA VILLA IMPERIAL</p>
        </div>

        <div className="seccion">
          <h3>LUNES 30</h3>

          <p>
            Isa de la bandera lugar: Obelisco a hrs 8:00 con la
          </p>

          <p>
            PARTICIPACIÓN DE TODO EL ALUMNADO DEL
          </p>

          <p>
            ESTABLECIMIENTO, DOCENTES, EX ALUMNOS,
            PÚBLICO EN GENERAL
          </p>
        </div>

        <div className="seccion">
          <p className="destacado">
            GRAN RETRETA DE GALA A CARGO DE LOS
          </p>

          <p className="destacado">
            EX ALUMNOS PLAZA 10 DE NOVIEMBRE
          </p>

          <p>A HORAS 19:00</p>

          <p>HONOR DISCIPLINA Y DEPORTE</p>

          <p>"ADELANTE MEDINACELI"</p>
        </div>

        <img src={imgdeoro} alt="Imgdeoro" className="img-oro" />

        <h1> EL SABADO 28 DE MARZO TODO EL PROGRAMA </h1>
        <h1> COMEMORANDPO LAS BODAS DE ORO </h1>
  

      </div>
    </div>
  );
}

export default NoticiaDeOro;