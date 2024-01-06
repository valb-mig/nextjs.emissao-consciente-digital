import React from 'react';
import haversine from 'haversine-distance';

const CalculoCO2 = ({ pontoA, pontoB }) => {
  const calcularDistancia = () => {
    return haversine(pontoA, pontoB) / 1000; // Convertendo de metros para quilômetros
  };

  const calcularEmissaoCO2 = () => {
    const distanciaPercorrida = calcularDistancia();
    const emissaoCO2PorKm = 0.096; // kg de CO2 por quilômetro
    const emissaoCO2 = emissaoCO2PorKm * distanciaPercorrida;
    return emissaoCO2.toFixed(2); // Ajustando para duas casas decimais
  };

  return (
    <p>
      A emissão de CO2 para a distância entre os pontos {pontoA.nome} e {pontoB.nome} é de aproximadamente {calcularEmissaoCO2()} kg.
    </p>
  );
};

export default CalculoCO2;

// Calculo de acordo com o site Terra na matéria https://www.terra.com.br/carros-motos/10-carros-mais-vendidos-do-brasil-juntos-emitem-toneladas-de-co2km,94edb86d5539c509875a33d4f89be399qaatriqn.html