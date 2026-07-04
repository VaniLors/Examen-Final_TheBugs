import React from 'react';
import '../styles/promociones.css';

// Importación de tus 6 imágenes según tu carpeta 'imges-promocion'
import imagen1 from '../imges-promocion/imagen1.png';
import imagen2 from '../imges-promocion/imagen2.png';
import imagen3 from '../imges-promocion/imagen3.png';
import imagen4 from '../imges-promocion/imagen4.png';
import imagen5 from '../imges-promocion/imagen5.png';
import imagen6 from '../imges-promocion/imagen6.png';

const Promociones = () => {

  // Datos organizados con títulos representativos para el Colegio Carlos Medinaceli
  const promocionesData = [
    { id: 1, img: imagen1, titulo: "Promoción Bodas de Oro", anio: "1974 - 2024" },
    { id: 2, img: imagen2, titulo: "Promoción de Graduados", anio: "Año Posterior" },
    { id: 3, img: imagen3, titulo: "Recuerdos de Ex-Alumnos", anio: "Sección A" },
    { id: 4, img: imagen4, titulo: "Galería Histórica", anio: "Sección B" },
    { id: 5, img: imagen5, titulo: "Desfile de Promociones", anio: "Aniversario" },
    { id: 6, img: imagen6, titulo: "Encuentro de Confraternidad", anio: "Bodas de Plata" },
  ];
  
  return (
    <div className="promociones-container">
      <header className="promociones-header">
        <h1>PROMOCIONES</h1>
        <div className="decor-line"></div>
        <p className="subtitle">Colegio Nacional Carlos Medinaceli</p>
      </header>

      <main className="promociones-grid">
        {promocionesData.map((promo) => (
          <div key={promo.id} className="promocion-card">
            <div className="image-wrapper">
              <img src={promo.img} alt={promo.titulo} />
            </div>
            <div className="promo-info">
              <h3>{promo.titulo}</h3>
              <span className="promo-year">{promo.anio}</span>
            </div>
          </div>
        ))}
      </main>

      <footer className="promociones-footer">
        <p>© Galería de Recuerdos y Promociones - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Promociones;