import { Link, useLocation } from "react-router-dom";
import '../styles/Sidebar.css'

const menuItems = [
  { label: "HISTORIA", to: "/historia" },
  { label: "Contacto", to: "/contacto" },
  {
    label: "FOTOS BANDA EX ALUMNOS",
    to: "/bandas",
    children: [{ label: 'FRATERNIDAD " SURIS "', to: "/danzas" }],
  },
  { label: "PROMOCIONES", to: "/promociones" },
  { label: "DEPORTES", to: "/deportes" },
  { label: "login", to: "/login" },
  { label: "Pronto la Actualizacion de la pagina", to: "/actualizacion" },
  { label: "NOTICIAS DE ORO", to: "/noticias-de-oro" },
  { label: "DOCENTES", to: "/docentes" },
  { label: "MAPA SATELITAL", to: "/mapa-satelital" },
];

function Sidebar() {
  const location = useLocation();

  const isActive = (to) => location.pathname === to;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">CARLOS MEDINACELI</h1>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          {menuItems.map((item) => (
            <li key={item.label} className="sidebar-item-group">
              <Link
                to={item.to}
                className={`sidebar-link ${isActive(item.to) ? "active" : ""}`}
              >
                <span className="sidebar-bullet">*</span>
                <span className="sidebar-label">{item.label}</span>
              </Link>

              {item.children && (
                <ul className="sidebar-sublist">
                  {item.children.map((child) => (
                    <li key={child.label} className="sidebar-subitem">
                      <Link
                        to={child.to}
                        className={`sidebar-link sidebar-sublink ${
                          isActive(child.to) ? "active" : ""
                        }`}
                      >
                        <span className="sidebar-bullet">*</span>
                        <span className="sidebar-label">{child.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
