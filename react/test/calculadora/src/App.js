import './App.css';
import Display from './components/display';
import Boton from './components/boton.jsx';
import BotonClear from './components/botonClear.jsx';
import {useState} from 'react';

//npm install mathjs
import {evaluate} from 'mathjs';

function App() {

    const[input, setInput] = useState('0');

    function insertInput(value) {
        setInput(input + value);
    };

    //Reseteando el valor del input con una función flecha
    const resetInput = () => {
        setInput('0');
    };

    const botonResultado = () => {
        if (input) {
            setInput(evaluate(input))
        };
    };

    return (
        <div className="App">
            <div className="contenedor-calculadora">
                <Display
                    valueDisplay={input}
                />
                <div className="contenedor-botones">
                    <div className="fila">
                        <Boton manageClick={insertInput}>
                            1
                        </Boton>
                        <Boton manageClick={insertInput}>
                            2
                        </Boton>
                        <Boton manageClick={insertInput}>
                            3
                        </Boton>
                        <Boton manageClick={insertInput}>
                            /
                        </Boton>
                    </div>
                    <div className="fila">
                        <Boton manageClick={insertInput}>
                            4
                        </Boton>
                        <Boton manageClick={insertInput}>
                            5
                        </Boton>
                        <Boton manageClick={insertInput}>
                            6
                        </Boton>
                        <Boton manageClick={insertInput}>
                            *
                        </Boton>
                    </div>
                    <div className="fila">
                        <Boton manageClick={insertInput}>
                            7
                        </Boton>
                        <Boton manageClick={insertInput}>
                            8
                        </Boton>
                        <Boton manageClick={insertInput}>
                            9
                        </Boton>
                        <Boton manageClick={insertInput}>
                            +
                        </Boton>
                    </div>
                    <div className="fila">
                        <Boton manageClick={insertInput}>
                            .
                        </Boton>
                        <Boton manageClick={insertInput}>
                            0
                        </Boton>
                        <Boton manageClick={botonResultado}>
                            =
                        </Boton>
                        <Boton manageClick={insertInput}>
                            -
                        </Boton>
                    </div>
                    <div className="fila">
                        <BotonClear manageClear={resetInput}>
                            Clear
                        </BotonClear>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;