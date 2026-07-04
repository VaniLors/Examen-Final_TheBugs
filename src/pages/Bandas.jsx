import "../styles/Bandas.css";
import banda1 from "../img-bandas/banda-1.png"
import banda2 from "../img-bandas/banda-2.png"
import banda3 from "../img-bandas/banda-3.png"
import banda4 from "../img-bandas/banda-4.png"
import banda5 from "../img-bandas/banda-5.png"
import banda6 from "../img-bandas/banda-6.png"
import banda7 from "../img-bandas/banda-7.png"
function Bandas(){
    return(
        <>

        <div>
        <h1>Fotos Banda Ex Alumnos</h1>
    </div>


        <p className="descripcion">
            La Banda de Ex Alumnos del Colegio Carlos Medinaceli participa en
            desfiles, actos cívicos y eventos especiales, manteniendo viva la
            tradición musical y el orgullo de pertenecer a nuestra institución.
        </p>

        <div className="galeria">
    <img src={banda1} alt="Banda 1" />
    <img src={banda2} alt="Banda 2" />
    <img src={banda3} alt="Banda 3" />
    <img src={banda4} alt="Banda 4" />
    <img src={banda5} alt="Banda 5" />
    <img src={banda6} alt="Banda 6" />
    <img src={banda7} alt="Banda 7" />
</div>
            
            

        
        </>
    );
        

}


export default Bandas;
