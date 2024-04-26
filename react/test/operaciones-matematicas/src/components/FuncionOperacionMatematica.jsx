import React, { useState} from 'react';

const FuncionSumar = () => {

    const [functValue, setFunctValue] = useState(0)

    return (
        <>
            <div className='displayResult'>
                <p>{functValue}</p>
            </div>
            <div>
                <button onClick={
                    () => {
                        setFunctValue(functValue + 1)
                    }
                }>
                    Sumar
                </button>
                <button onClick={
                    () => {
                        setFunctValue(functValue - 1)
                    }
                }>
                    Restar
                </button>
                <button className='bigButton' onClick={
                    () => {
                        setFunctValue(functValue * 2)
                    }
                }>
                    Multiplicar x2
                </button>
                <button className='bigButton' onClick={
                    () => {
                        setFunctValue(functValue / 2)
                    }
                }>
                    Dividir x2
                </button>
            </div>
        </>
    )
}

export default FuncionSumar;