import React from 'react';
import '../css/PropsNormal.css';

const PropsDesestructuracion = ({styleColor, title, values, address, hired, alert, Nivel}) => {
    return (
        <div>
            <h1 className={styleColor} title={title}>props con desesctructuración con el valor {values[2]}</h1>
            <p>Mostrando alguna información sobre el domicilio:</p>
            <ul>
                <li>{address.Street}</li>
                <li>{address.Number}</li>
                <li>{address.City}</li>
            </ul>
            <p>Vive en {address.Street + " " + address.Number + ", ciudad de " + address.City}</p>
            <p><u>Estado de ocupación:</u></p>
            <p>{hired ? "Ocupado / Contratado" : "Desocupado / En búsqueda de empleo"}</p>
            <button type="button" onClick={alert}>Lanzar alerta</button>
            <h2>{Nivel[1]}</h2>
        </div>
    )
}

export default PropsDesestructuracion;