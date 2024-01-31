import React from "react";
import '../css/imagen.css';
import paisaje from '../img/paisaje1.jpg';

 function Imagen () {
    return (
        <picture className="imagen-paisaje">
            <img src={paisaje} alt="Paisaje" />
        </picture>
    )
 }

 export default Imagen;