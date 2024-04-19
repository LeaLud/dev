import React from 'react';

const SubmitForm = () => {
    return (
        <form onSubmit={
            (e) => {
                e.preventDefault()
                alert('Formulario enviado')
            }
        }>
            <h1>Enviando un form</h1>
            <button>Enviar</button>
        </form>
    )
}

export default SubmitForm;