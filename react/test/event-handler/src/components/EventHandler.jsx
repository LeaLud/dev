import React from 'react';

// Pasando un evento como parámetro a una función
const FunctOnchange = (e) => {

    // Mostrando por consola los valores del evento
    console.log((e.target.value))
}

const EventHandler = (props) => {

    // Definiendo una función que condicione el valor del botón de acuerdo a si funciona con uno o dos clics
    const FunctButtonValue = props.doubleClick
    ? 'Doble Clic'
    : 'Simple Clic'

    // Eventos onClick y onDoubleClick
    return (
        props.doubleClick
            ? <button onDoubleClick={
                () => {
                    alert('Double click Alert')
                }
            }>{FunctButtonValue}</button>
            : <button onClick={
                () => {
                    alert('One click Alert')
                }
            }>{FunctButtonValue}</button>
    )


    // Event onChange
    /*return (
        <>
            <h2>Ver por consola lo que se tipea en el input</h2>
            <input type='text'
                onChange={FunctOnchange}>
            </input>
        </>
    )*/
}

export default EventHandler;