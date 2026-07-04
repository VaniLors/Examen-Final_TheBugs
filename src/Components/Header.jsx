import "../styles/Header.css";
// Misma logica que fondo-fuego.png: se importa como modulo para que
// Vite la procese bien y no se rompa al hacer build/deploy.
import tigre from "./tigre.png";

/**
 * Header con la foto del tigre, ubicado arriba de todo
 * (por encima del Sidebar y el contenido, debajo de nada).
 * Se coloca en Home.jsx, al lado del fondo-fuego.
 */
function Header() {
  return (
    <header className="site-header">
      <img src={tigre} alt="Tigre" className="site-header-img" />
    </header>
  );
}

export default Header;
