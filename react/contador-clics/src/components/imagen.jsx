import React from "react";
import '../css/imagen.css';
import paisaje from '../img/paisaje1.jpg';

function Imagen (props) {
    return (
        <picture className="imagen-paisaje">
            <img src={paisaje} alt={props.altImagen} />
        </picture>
    )
}

 export default Imagen;