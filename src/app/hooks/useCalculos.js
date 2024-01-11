'use client';

import haversine from 'haversine-distance';

const useCalculos = () => {

    const CalculoDistancia = (pontoA, pontoB) => {
        const distanciaEmKm = haversine(pontoA, pontoB) / 1000;
        return distanciaEmKm.toFixed(2);
    };

    const CalculoCO2 = (pontoA, pontoB, veiculo) => {

        const distanciaPercorrida = haversine(pontoA, pontoB) / 1000;

        let emissaoCO2PorKm = 0;

        switch(veiculo) {

            case 'c':
                emissaoCO2PorKm = 0.380;
                break;

            case 'm':
                emissaoCO2PorKm = 0.210;
                break;

            case 'o':
                emissaoCO2PorKm = 0.060;
                break;
        }

        const emissaoCO2 = emissaoCO2PorKm * distanciaPercorrida;

        return emissaoCO2.toFixed(2);
      };
      

    return { CalculoDistancia, CalculoCO2 };
}

export default useCalculos;