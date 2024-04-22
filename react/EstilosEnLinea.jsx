import React from 'react';

const EstilosEnLinea = (props) => {
    return (
        <div className={props.listNum ? 'lista1' : 'lista2'} style={
            {
                borderRadius: '4px',
                border: '1px solid salmon',
                padding: '20px 10px',
                fontSize: '24px',
                fontWeight: '700',
                backgroundColor: 'beige',
                marginBottom: '40px'
            }
        }>
            <p style={
                props.textColor ? {color: 'green'} : {color: 'orange'}
                }
            >Aplicando estilos en línea</p>
        </div>
    )
}

export default EstilosEnLinea;