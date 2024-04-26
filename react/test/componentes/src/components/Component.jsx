import React from "react";

// Definiendo las propiedades con la sintaxis normal

/*const Component = (props) => {
    return (
        <article>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <picture>
                <img src={'https://www.cadena3.com/admin/imagenes/categoria/' + props.srcImage} alt={props.titulo} title={props.postdata} />
            </picture>
            <p>{props.parrafo}</p>
            <small>{props.postdata}</small>
        </article>
    )
}*/

// Definiendo las propiedades con la sintaxis de desestructuración

const Component = ({ titulo, subtitulo, parrafo,  postdata, srcImage }) => {
    return (
        <article>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <picture>
                <img src={'https://www.cadena3.com/admin/imagenes/categoria/' + srcImage} alt={titulo} title={postdata} />
            </picture>
            <p>{parrafo}</p>
            <small>{postdata}</small>
        </article>
    )
}

export default Component;