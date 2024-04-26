import React from 'react';
import boton from '../css/boton.css';

function BotonClear(props) {
    return (
        <div
            className='botonClear boton'
            onClick={props.manageClear}>
                <p>{props.children}</p>
        </div>
    )
}

export default BotonClear;