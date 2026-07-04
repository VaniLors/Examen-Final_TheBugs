import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";  
import Bandas from "./pages/Bandas";
import Danzas from "./pages/Danzas";
import Deportes from "./pages/Deportes";
import Docentes from "./pages/Docentes";
import Actualizacion from "./pages/Actualizacion";
import NoticiaDeOro from "./pages/NoticiaDeOro";
import Login from "./pages/Login";  
import Historia from "./pages/Historia";
import Contacto from "./pages/Contacto";
import Mapasatelital from "./pages/mapasatelital";
import Promociones from "./pages/Promociones";
import Header from "./Components/Header";
import Inicio from "./Components/Inicio";

function App() {
  const [entrado, setEntrado] = useState(false);

  return (
    <>
      {/* Esto queda fijo arriba de TODO, sea Inicio o el layout principal */}
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
        }}
        snowflakeCount={100}
      />

      {!entrado ? (
        <Inicio onEntrar={() => setEntrado(true)} />
      ) : (
        <BrowserRouter>
          <Home>
            <Header />
            <div className="app-layout">
              <Sidebar />
              <main className="app-content">
                <Routes>
                  <Route path="/" element={<Navigate to="/historia" replace />} />
                  <Route path="/historia" element={<Historia />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="/bandas" element={<Bandas />} />
                  <Route path="/danzas" element={<Danzas />} />
                  <Route path="/deportes" element={<Deportes />} />
                  <Route path="/docentes" element={<Docentes />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/actualizacion" element={<Actualizacion />} />
                  <Route path="/noticias-de-oro" element={<NoticiaDeOro />} />
                  <Route path="/mapa-satelital" element={<Mapasatelital />} />
                  <Route path="/promociones" element={<Promociones />} />
                  <Route path="*" element={<Navigate to="/historia" replace />} />
                </Routes>
              </main>
            </div>
          </Home>
        </BrowserRouter>
      )}
    </>
  );
}
export default App;