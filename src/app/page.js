// pages/index.js

// Mostrar quanto de co2 caso fosse um carro por ex ou trem, 💀

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
          Title='Emissão Consciente Digital'
          Desc='“Minimizando Pegadas de Carbono no Transporte Público"'
        />
      </Header.Root>

      <main>
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

          <div className='d-flex flex-column gap-2 p-2'>
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
      
        <section className='info-box bg-light m-5 px-2'>
        </section>
      </main>

      <Footer.Root>
        <p>&copy;Programa criado por <a href='https://github.com/valb-mig' target='__blank'>Ivalber Miguel</a></p>
      </Footer.Root>
    </>
  );
};

export default Home;

// Por padrão mostrar os principais locais de recife, mas permitir dados mais especificos com lng e lat