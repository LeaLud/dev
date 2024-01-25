import paisaje1 from './img/paisaje1.jpg';
import './App.css';
import Boton from './components/boton.jsx'
import Contador from './components/contador.jsx';
import { useState } from 'react';

function App() {

    const [numClics, actualizarClics] = useState(0)

    const sumarClic = () => {
        actualizarClics(numClics + 1);
    }

    const reiniciarContador = () => {
        actualizarClics(0);
    }

    return (
        <div className="App">
            <div className='imagen-paisaje'>
                <img
                    src= {paisaje1}
                    alt='Paisaje'
                >
                </img>
            </div> 
            <div className='contenedorContador'>
                <Contador
                    numClics = {numClics}
                    />
                <Boton
                    input = 'Contador'
                    botonSumar = {true}
                    gestionarClic = {sumarClic}
                />
                <Boton
                    input = 'Reiniciar'
                    botonSumar = {false}
                    gestionarClic = {reiniciarContador}
                />
            </div>
        </div>
    );
}

export default App;
