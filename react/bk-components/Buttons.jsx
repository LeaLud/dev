import { React, useState } from 'react';
import '../css/ButtonStates.css';

const Buttons = (props) => {

    const [meSiguesONo, setMeSiguesONo] = useState(false)

    const handleClick = () => {
        setMeSiguesONo(!meSiguesONo)
    }

    // Definiendo una constante que acondiciona la clase del botón y que luego se resuelve en el elemento
    const buttonClass = meSiguesONo ? 'activeButton buttons' : 'buttons';

    // Definiendo otra constante que acondiciona el value del botón
    const valueButton = meSiguesONo ? 'Me sigues' : 'Sígueme';

    // La prop children obtiene todo lo qué esté contenido entre las etiquetas de apertura y cierre del componente
    return (
        <button className={buttonClass} title={props.title} onClick={handleClick}>
            {props.svg}{props.value}{props.children}{valueButton}
        </button>
    )
}

export default Buttons;