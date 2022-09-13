import React, { useState } from 'react'
import Headear from './components/Headear'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'

import styled from '@emotion/styled';
import Spiner from './components/Spiner'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #FFF;
    padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Headear
        titulo='Cotizador De Seguros'
      ></Headear>


      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spiner /> : null}

        <Resumen
          datos={datos}
        >
        </Resumen>
        {
          !cargando ? (
            <Resultado
              cotizacion={cotizacion}
            ></Resultado>
          ) : null
        }

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
