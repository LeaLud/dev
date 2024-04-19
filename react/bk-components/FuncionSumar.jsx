import React from 'react';
import '../css/Component.css';
import '../css/Component1.css';

const FunctSumar = () => {

    var a = 7;
    var b = 4;

    const sumar = () => a + b;
    const resultado = sumar();

    return <h1>{a === b ? a + ' es igual a ' + b : a > b ? a + ' es mayor que ' + b : b + ' es mayor que ' + a}</h1>

}

export default FunctSumar;