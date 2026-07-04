    import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
    import "./App.css";
    import Sidebar from "./Components/Sidebar";
    import Home from "./Components/Home";   // <-- esta es la ruta que necesitás

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
import Header from "./Components/Header";

    function App() {
      return (
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

                  {/* ruta no encontrada */}
                  <Route path="*" element={<Navigate to="/historia" replace />} />
                </Routes>
              </main>
            </div>
          </Home>
        </BrowserRouter>
      );
    }

    export default App;





