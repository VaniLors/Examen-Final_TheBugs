import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/mapasatelital.css';

// Corregir la ruta de los iconos por defecto de Leaflet en Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const { BaseLayer } = LayersControl;

const Mapasatelital = () => {
  // Coordenadas idénticas a la página original
  const posicion = [-19.58572, -65.75338];

  return (
    <div className="contenedor-panel-mapa">
      {/* Barra superior azul oscuro */}
      <div className="barra-titulo-satelital">
        MAPA SATELITAL <span className="asterisco-derecha">*</span>
      </div>

      {/* Contenido interior */}
      <div className="contenido-panel-satelital">
        <h2 className="texto-colegio">"COLEGIO CARLOS MEDINACELI"</h2>
        <h3 className="texto-direccion">QUIJARRO, 591 POTOSI :</h3>

        {/* Recuadro contenedor del mapa Leaflet */}
        <div className="recuadro-mapa-leaflet">
          <MapContainer 
            center={posicion} 
            zoom={16} 
            style={{ height: "100%", width: "100%" }}
            zoomControl={true}
          >
            {/* Control de Capas (Permite alternar entre Mapa y Satélite) */}
            <LayersControl position="topright">
              
              {/* 1. Capa del Mapa Normal (Callejero) */}
              <BaseLayer name="Mapa">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
              </BaseLayer>

              {/* 2. Capa de Satélite (Marcada como 'checked' para que aparezca primero) */}
              <BaseLayer checked name="Satélite">
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
                />
              </BaseLayer>

            </LayersControl>
            
            {/* Marcador sobre la ubicación exacta */}
            <Marker position={posicion}>
              <Popup>
                <b>Colegio Carlos Medinaceli</b><br />Quijarro, 591 Potosí.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Mapasatelital;