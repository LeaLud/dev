import React from 'react';
import { useState } from 'react';

const HookUseState = () => {

    const [input, setInput] = useState('')

    return (
        <div>
            <input onChange={
                e => setInput(e.target.value)
            }
            ></input>
            <button onClick={input ?
                () => {
                    alert ('Valor copiado')
                } : () => {
                    alert ('No se ha ingresado valor alguno')
                }
            }>
                Guardar
            </button>
        </div>
    )

    /*let [contador, changeState] = useState(0)

    return (
        <div>
            <h1>Hook UseState</h1>
            <h2>Contador: {contador}</h2>
            <button onClick={() => {
                  changeState(contador + 1)
                }
            }>+1</button>

            <button onClick={
                () => {
                    changeState(contador - 1)
                }
            }>
                -1
            </button>

            <button onClick={
                () => {
                    changeState(0)
                }
            }>
                Reiniciar valor
            </button>
        </div>
    )*/
}

export default HookUseState;