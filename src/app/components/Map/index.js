import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './styles/MapRoot.scss';

const Map = ({ pontoA, pontoB }) => {

  const getIcon = (ponto) => {

    const meuIcone = L.icon({
      iconUrl: `/img/marker_${ponto}.png`, // Substitua pelo URL real da sua imagem online
      iconSize: [40, 40], // Especifique o tamanho do ícone
      iconAnchor: [15, 30], // Ponto onde o ícone estará ancorado ao marcador
      popupAnchor: [0, -30], // Ponto onde a janela popup estará ancorada ao marcador
    });

    return meuIcone;
  }

  return (
    <MapContainer
      center={[pontoA.lat, pontoA.lng]}
      zoom={7}
      style={{ height: '300px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[pontoA.lat, pontoA.lng]} icon={getIcon('a')}>
        <Popup>{pontoA.nome}</Popup>
      </Marker>
      <Marker position={[pontoB.lat, pontoB.lng]} icon={getIcon('b')}>
        <Popup>{pontoB.nome}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;