import "./App.css";
import Bandas from "./pages/Bandas";
import Danzas from "./pages/Danzas";
import { useState } from 'react'
import Deportes from './pages/deportes'
import Docentes from './pages/Docentes'
import Actualizacion from './pages/Actualizacion'
import NoticiaDeOro from './pages/NoticiaDeOro'
import Login from './pages/Login'
import React from "react";
import Historia from "./pages/Historia";
import Contacto from "./pages/Contacto";
import Mapasatelital from './pages/mapasatelital'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NoticiaDeOro />
     <Deportes />
      <Contacto />
        <Bandas/>
        <Danzas/>
        <Historia />
        <Mapasatelital />
         <Docentes />
    <Actualizacion />
    <Login />
    </>
      
  );

}

export default App;