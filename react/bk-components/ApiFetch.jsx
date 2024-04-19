    import React from 'react';

export const ApiFetch = () => {
    return (
        <button onDoubleClick={
            () => {
                fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
                    .then(response => response.json())
                    .then(data => console.log(data))

                    //Capturar y mostrar el error en consola
                    .catch(error => console.error(error))
            }
        }>Tocar</button>
    )
}