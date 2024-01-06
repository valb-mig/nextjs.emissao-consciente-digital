import React from 'react';
import haversine from 'haversine-distance';

const CalculoDistancia = ({ pontoA, pontoB }) => {
  const distanciaEmKm = haversine(pontoA, pontoB) / 1000; // Convertendo de metros para quilômetros
  return <p>A distância entre os pontos {pontoA.nome} e {pontoB.nome} é de aproximadamente {distanciaEmKm.toFixed(2)} km.</p>;
};

export default CalculoDistancia;
