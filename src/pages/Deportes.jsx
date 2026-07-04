import React from 'react';
import '../styles/deportes.css';

import fotoBasquet from '../imges-deportes/imagen1.png';
import fotoFutbol from '../imges-deportes/imagen2.png';
import foto3 from '../imges-deportes/imagen3.png';
import foto4 from '../imges-deportes/imagen4.png';
import foto5 from '../imges-deportes/imagen5.png';
import foto6 from '../imges-deportes/imagen6.png';
import foto7 from '../imges-deportes/imagen7.png';
import foto8 from '../imges-deportes/imagen8.png';

const Deportes = () => {
  const integrantesBasquet = [
  ];
  return (
    <div className="panel-deportes">
      <div className="panel-header-tab">DEPORTES</div>

      <div className="panel-body">
        <div className="decorativo-asterisco"></div>

        {}
        <div className="articulo-deportivo">
          <div className="marco-imagen">
            <img 
              src={fotoBasquet} 
              alt="Equipo de Básquet Tercero B" 
              className="imagen-retro"
            />
          </div>
          <p className="texto-periodico">
            <strong></strong> {integrantesBasquet.join(', ')}, 
        
          </p>
        </div>

        {}
        <div className="articulo-deportivo">
          <div className="marco-imagen">
            <img 
              src={fotoFutbol} 
              alt="Equipo de Fútbol Colegio Medinaceli" 
              className="imagen-retro"
            />
          </div>
        </div>

        {}
        <div className="articulo-deportivo">
          <div className="marco-imagen">
            <img src={foto3} alt="Deportes Medinaceli 3" className="imagen-retro" />
          </div>
        </div>

        {}
        <div className="articulo-deportivo">
          <div className="marco-imagen">
            <img src={foto4} alt="Deportes Medinaceli 4" className="imagen-retro" />
          </div>
        </div>

        {}
        <div className="articulo-deportivo">
          <div className="marco-imagen">
            <img src={foto5} alt="Deportes Medinaceli 5" className="imagen-retro" />
          </div>
        </div>

        {}
        <div className="articulo-deportivo">
          <div className="marco-imagen">
            <img src={foto6} alt="Deportes Medinaceli 6" className="imagen-retro" />
          </div>
        </div>

        {}
        <div className="articulo-deportivo">
          <div className="marco-imagen">
            <img src={foto7} alt="Deportes Medinaceli 7" className="imagen-retro" />
          </div>
        </div>

        {}
        <div className="articulo-deportivo">
          <div className="marco-imagen">
            <img src={foto8} alt="Deportes Medinaceli 8" className="imagen-retro" />
          </div>
        </div>

        <div className="decorativo-asterisco sub-decorativo">*</div>
      </div>
    </div>
  );
};

export default Deportes;
