import { React, useState } from 'react';
import '../css/ButtonStates.css';

const EstadoBoton = ({ state }) => {

    const [value, setState] = useState()

    const buttonClasses = value
        ? 'activeButton buttons'
        : 'buttons'

    const buttonValues = value
        ? 'Seguime'
        : 'Siguiendo'

    const manejarClick = () => {
        setState(!value)
    }

    return (
        <button className={buttonClasses} onClick={manejarClick}>{buttonValues}</button>
    )
}

export default EstadoBoton;