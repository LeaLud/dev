import React from 'react';
import boton from '../css/boton.css';

function Boton(props) {

    const botonOperador = (valor) => {
        return isNaN(valor) && (valor != '=') && (valor != '.')
    }

    return (
        <div
            className={`boton ${botonOperador(props.children) ? 'botonOperador' : ''}`.trimEnd()}
            onClick={() => props.manageClick(props.children)}>
                <p>{props.children}</p>
        </div>
    )
}

export default Boton;