import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import Mapasatelital from './pages/mapasatelital'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="layout-principal-colegio">
      {}
      <main className="seccion-contenido">
        <Mapasatelital />
      </main>
    </div>
  )
}

export default App