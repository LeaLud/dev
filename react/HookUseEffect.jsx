import React from 'react';
import { useState, useEffect } from 'react';

const HookUseEffect = () => {

    const [contador, setContador] = useState(0)

    // useEffect renderizará nuevamente la interfaz al producirse cambios en la variable indicada en el array
    useEffect(() => {
        console.log('Renderizando interfaz')
    }, [contador])

    return (
        <div>
            <button onClick={
                () => {
                    setContador(contador + 1)
                }
            }>
                Contador: {contador}
            </button>
        </div>
    )
}

export default HookUseEffect;