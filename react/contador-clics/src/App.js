import './App.css';
import Boton from './components/boton.jsx'
import Contador from './components/contador.jsx';
import Imagen from './components/imagen.jsx';
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
            <Imagen
                altImagen = 'Alt de la imagen del paisaje'
            />
            <div className='contenedorContador'>
                <Contador
                    numClics = {numClics} />
                <Boton
                    input = 'Contador'
                    botonSumar = {true}
                    gestionarClic = {sumarClic} />
                <Boton
                    input = 'Reiniciar'
                    botonSumar = {false}
                    gestionarClic = {reiniciarContador} />
            </div>
        </div>
    );
}

export default App;
