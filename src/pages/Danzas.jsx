import "../styles/Danzas.css";
import danza1 from "../images-danzas/danzas-1.png";
import danza2 from "../images-danzas/danzas-2.png";
import danza3 from "../images-danzas/danzas-3.png";
import danza4 from "../images-danzas/danzas-4.png";
import danza5 from "../images-danzas/danzas-5.png";
import danza6 from "../images-danzas/danzas-6.png";
import danza7 from "../images-danzas/danzas-7.png";

function Danzas(){
    return(
        <>

<div>

    <section className="contenido">

       <div className="galeria">
    <img src={danza1} alt="Suris 1" />
    <img src={danza2} alt="Suris 2" />
    <img src={danza3} alt="Suris 3" />
    <img src={danza4} alt="Suris 4" />
    <img src={danza5} alt="Suris 5" />
    <img src={danza6} alt="Suris 6" />
    <img src={danza7} alt="Suris 7" />
</div>

        <p>
            La Fraternidad "SURIS" está integrada por exalumnos del Colegio
            Carlos Medinaceli, quienes comparten actividades culturales,
            deportivas y sociales con el propósito de fortalecer la amistad,
            la integración y el compañerismo entre promociones.
        </p>

    </section>

</div>

        
        
        
        </>

        )
        }
export default Danzas;