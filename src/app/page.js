// pages/index.js

// Mostrar quanto de co2 caso fosse um carro por ex ou trem, 💀

'use client';

import React, { useState } from 'react';
import Icon from '@/config/assets/icons';
import municipiosJson from '@/config/json/municipios_recife.json'

import Map    from '@/app/components/Map';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Form   from '@/app/components/Form';
import Select from '@/app/components/Select';
import Input  from '@/app/components/Input';
import Button from '@/app/components/Button';
import Card   from '@/app/components/Card';

import CalculoDistancia from '@/config/helpers/CalculoDistancia';
import CalculoCO2 from '@/config/helpers/CalculoCO2';

const Home = () => {

  const consumoMedio = 5; // km por litro
  const emissaoCO2PorLitro = 2.68; // kg por litro

  const [rota, setRota] = useState({
    A:{ lat: -8.05428, lng: -34.8813, nome: 'Recife, PE' },
    B:{ lat: -8.00937, lng: -34.8553, nome: 'Olinda, PE' }
  });

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value;
    const selected = municipiosJson.find((municipio) => municipio.indice === parseInt(selectedIndex));

    console.log(selected);
  };

  return (
    <>
      <Header.Root>
        <Header.Start
          Title='Emissão Consciente Digital: “Minimizando Pegadas de Carbono no Transporte Público"'
        />
      </Header.Root>

      <main className='row'>

        <section className='main-box'>
          <div className='map-container'>

            <Form.Root OnSubmit={() => {}} Class="d-flex gap-2 p-2 map-form">
              <Select.Root
                Placeholder="Ponto A"
                Options={municipiosJson}
              />
              <Select.Root
                Placeholder="Ponto B"
                Options={municipiosJson}
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
              />
              <Button.Root
                Type="submit"
                Class="btn-primary"
                Title="Calcular"
              />
            </Form.Root>

            <Map.Root 
              pontoA={rota.A} 
              pontoB={rota.B} 
            />
          </div>

          <div className='info'>
            <Card.Root>
            </Card.Root>

            <Card.Root>
            </Card.Root>

            <Card.Root>
            </Card.Root>
          </div>
        </section>
      
        <CalculoDistancia 
          pontoA={rota.A} 
          pontoB={rota.B}
        />
        
        <CalculoCO2 
          pontoA={rota.A} 
          pontoB={rota.B} 
          consumoMedio={consumoMedio} 
          emissaoCO2PorLitro={emissaoCO2PorLitro} 
        />

      </main>

      <Footer.Root>
        <p>&copy;Programa criado por <a href='https://github.com/valb-mig' target='__blank'>Ivalber Miguel</a></p>
      </Footer.Root>
    </>
  );
};

export default Home;

// Por padrão mostrar os principais locais de recife, mas permitir dados mais especificos com lng e lat