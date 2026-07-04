import Snowfall from "react-snowfall";
import '../styles/Home.css';
// Importamos la imagen como modulo (NO como ruta de texto tipo "/public/...").
// Esto hace que Vite la procese, le agregue un hash unico y la copie sola
// a la carpeta de build al hacer "npm run build" -> sin roturas al deployar.
import fondoFuego from "./fondo-fuego.png";

/**
 * Home envuelve TODA la app: pone el fuego como fondo fijo
 * y encima le suma un efecto de nieve/ceniza cayendo.
 * Usalo en App.jsx envolviendo todo lo demas.
 */
function Home({ children }) {
  return (
    <div
      className="home-background"
      style={{ backgroundImage: `url(${fondoFuego})` }}
    >
      {/* Efecto de nieve/ceniza cayendo sobre el fuego.
          pointer-events: none para que no bloquee los clicks
          del Sidebar ni de las paginas que estan debajo. */}
      <Snowfall
        color="#fff8e7"
        snowflakeCount={120}
        radius={[0.5, 2.5]}
        speed={[0.5, 1.5]}
        wind={[-0.5, 1]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div className="home-content">{children}</div>
    </div>
  );
}

export default Home;
