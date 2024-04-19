import React from 'react';
import '../css/PropsNormal.css';

const PropsNormal = (props) => {
    return (
        <div>
            <h1 className={props.styleColor} title={props.title}>Props normal con el valor {props.values.fecha}</h1>
            <p>Mostrando alguna información sobre el domicilio:</p>
            <ul>
                <li>{props.address.Street}</li>
                <li>{props.address.Number}</li>
                <li>{props.address.City}</li>
            </ul>
            <p>Vive en {props.address.Street + " " + props.address.Number + ", ciudad de " + props.address.City}</p>
            <p><u>Estado de ocupación:</u></p>
            <p>{props.hired ? "Ocupado / Contratado" : "Desocupado / En búsqueda de empleo"}</p>
            <button type="button" onClick={props.alert}>Lanzar alerta</button>
            <h3>{props.Nivel[1]}</h3>
        </div>
    )
}

export function Button2({buttonValue}) {
    return (
        <button type="button">{buttonValue}</button>
    )
}

export const Bucle = () => {
    
}

export default PropsNormal;