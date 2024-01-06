import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/MapRoot.scss';

const MapRoot = ({ pontoA, pontoB }) => {

  useEffect(() => {
    import('leaflet/dist/leaflet.css');
  }, []);

  return (
    <MapContainer
      center={[pontoA.lat, pontoA.lng]}
      zoom={7}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[pontoA.lat, pontoA.lng]}>
        <Popup>{pontoA.nome}</Popup>
      </Marker>
      <Marker position={[pontoB.lat, pontoB.lng]}>
        <Popup>{pontoB.nome}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapRoot;