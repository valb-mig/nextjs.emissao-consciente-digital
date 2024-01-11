'use client';

import React, { useState } from 'react';
import useCalculos from './hooks/useCalculos';
import Icon from '@/config/assets/icons';
import municipiosJson from '@/config/json/municipios_recife.json'

import Map    from '@/app/components/Map';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Form   from '@/app/components/Form';
import Select from '@/app/components/Select';
import Card   from '@/app/components/Card';
import Box    from '@/app/components/Box';

import './styles/app.scss';

const Home = () => {

  const [rota, setRota] = useState({
    A:{ lat: -8.05428, lng: -34.8813, nome: 'Recife, PE' },
    B:{ lat: -8.00937, lng: -34.8553, nome: 'Olinda, PE' }
  });

  const [veiculo, setVeiculo] = useState('o');

  const { CalculoCO2, CalculoDistancia } = useCalculos();

  const handleSelectChange = (event, ponto) => {
    const selectedIndex = event.target.value;

    if(selectedIndex !== '')
    {
      const selected = municipiosJson.find((municipio) => municipio.indice === parseInt(selectedIndex));

      setRota({
        ...rota, 
          [ponto]:{
            indice: selected.indice,
            lat:    selected.lat,
            lng:    selected.lng,
            nome:   selected.nome
          }
        });
    }
  };

  return (
    <>
      <Header.Root>
        <Header.Start
          Title='Emissão Consciente Digital (Recife/PE)'
          Desc='“Minimizando Pegadas de Carbono no Transporte Público"'
        />
      </Header.Root>

      <main>

      <section className='info-box d-flex flex-column m-5 gap-2'>
        <Box.Root>
          <Box.Body
            Icon={<Icon.Info/>}
            Class="bg-warning"
            Desc="Site feito para mostrar a quantidade de co2 que alguns veiculos podem emitir a partir de uma distância a ser percorrida, lembre-se que todos os calculos são referentes aos gastos individuais."
          />
        </Box.Root>
      </section>

      <h2 className='d-flex w-100 justify-content-center'>Emissão de Co²</h2>

      <section className='info-box d-flex flex-column m-5 gap-2 bg-light p-2'>
      <p>A emissão de dióxido de carbono (CO2) no trânsito é uma preocupação ambiental crescente, contribuindo para as mudanças climáticas. É essencial adotarmos medidas para reduzir nosso impacto ambiental. Aqui estão algumas sugestões:</p>

      <ol>
          <li><strong>Transporte Público:</strong> Optar por transporte público ajuda a reduzir o número de veículos individuais na estrada, diminuindo as emissões por pessoa.</li>
          <li><strong>Carpooling e Compartilhamento de Carros:</strong> Compartilhe viagens com outras pessoas para reduzir a quantidade de veículos em circulação e, consequentemente, as emissões de CO2.</li>
          <li><strong>Bicicletas e Caminhadas:</strong> Em áreas urbanas, considere o uso de bicicletas ou caminhadas para destinos próximos, contribuindo para um trânsito mais sustentável.</li>
      </ol>

      <p>Lembre-se, pequenas mudanças em nossos hábitos de transporte podem fazer uma grande diferença para o meio ambiente. Faça a sua parte!</p>
      </section>

      <h2 className='d-flex w-100 justify-content-center'>Calculadora de emissão</h2>

        <section className='main-box bg-light m-5 p-2 d-flex'>
          <div className='map-container w-100'>
            <Form.Root OnSubmit={() => {}} Class="d-flex gap-2 p-2 map-form">
              <Select.Root
                Placeholder="Ponto A"
                Options={municipiosJson}
                OnChange={(e) => handleSelectChange(e, 'A')}
                Value={rota.A.indice}
              />
              <Select.Root
                Placeholder="Ponto B"
                Options={municipiosJson}
                OnChange={(e) => handleSelectChange(e, 'B')}
                Value={rota.B.indice}
              />
              <Select.Root
                Placeholder="Veiculo"
                Options={
                [
                  {
                    indice:'c',
                    nome:'Carro'
                  }, 
                  {
                    indice:'m',
                    nome:'Moto'
                  },
                  {
                    indice:'o',
                    nome:'Ônibus'
                  } 
                ]}
                OnChange={(e) => setVeiculo(e.target.value)}
                Value={veiculo}
              />
            </Form.Root>

            <Map.Root 
              pontoA={rota.A} 
              pontoB={rota.B} 
            />
          </div>

          <div className='d-flex flex-column gap-2 justify-content-between p-2 h-100'>
            <Card.Root>
              <Card.Body
                Icon={<Icon.Road/>}
                Text={CalculoDistancia(rota.A, rota.B)+' km'}
              />
            </Card.Root>

            <Card.Root>
              <Card.Body
                Icon={<Icon.Co2/>}
                Text={CalculoCO2(rota.A, rota.B, veiculo)+' kg'}
              />
            </Card.Root>
          </div>
        </section>
      
        <h2 className='d-flex w-100 justify-content-center'>Calculos/Médias</h2>

        <section className='info-box d-flex flex-column m-5 gap-2'>
          <Box.Root>
            <Box.Body
              Icon={<Icon.Buss/>}
              Class={veiculo == 'o' ? "bg-success text-white" : "bg-light"}
              Desc="O Calculo da emissão de co² em relação aos ônibus é, (levando em consideração o consumo individual):  0.060 kg * X km"
            />
          </Box.Root>
          <Box.Root>
            <Box.Body
              Icon={<Icon.Car/>}
              Class={veiculo == 'c' ? "bg-success text-white" : "bg-light"}
              Desc="O Calculo da emissão de co² em relação aos carros é, (levando em consideração o consumo individual):  0.380 kg * X km"
            />
          </Box.Root>
          <Box.Root>
            <Box.Body
              Icon={<Icon.Bike/>}
              Class={veiculo == 'm' ? "bg-success text-white" : "bg-light"}
              Desc="O Calculo da emissão de co² em relação às motos é, (levando em consideração o consumo individual):  0.210 kg * X km"
            />
          </Box.Root>
        </section>
      </main>

      <Footer.Root>
        <p>&copy;Programa criado por <a href='https://github.com/valb-mig' target='__blank'>Ivalber Miguel</a></p>
      </Footer.Root>
    </>
  );
};

export default Home;