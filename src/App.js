import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import clickAr from './img/clickar.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='clickar-logo-contenedor'>
        <h1>ClickAr</h1>
        <img 
        className='clickar-logo'
        src={clickAr}
        alt='Logo de ClickAr' 
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
