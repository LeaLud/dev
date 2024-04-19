import React from 'react';

const FunctionHandeler = (e) => {console.log((e.target.value))}

const EventHandler = (props) => {
    /*return (
        <button onClick={
            () => {
                alert('Alertaaaa!!!')
            }
        }>Trigger</button>
    )

    return (
        <input type='text' onChange={FunctionHandeler}></input>
    )*/

    return (
        props.doubleClick ? <button onDoubleClick={() => console.log(2 + 2)}>Doble clic</button> : <button onClick={() => console.log(1 + 1)}>Simple clic</button>
    )
}

export default EventHandler;