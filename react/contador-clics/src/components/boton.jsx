import React from 'react';
import '../css/boton.css'

//Sintaxis de desestructuración
function Boton ({input, botonSumar, gestionarClic}) {
    return (
        <button type='button' className={botonSumar ? 'claseBotonSumar' : 'botonReiniciar'} onClick={gestionarClic}>
            {input}
        </button>
    );
};

export default Boton;