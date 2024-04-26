import React from 'react';
import display from '../css/display.css';

function Display(props) {
    return (
        <div
            className='display'>
                <p>{props.valueDisplay}</p>
                <p id='backgroundNums'>88888888888</p>
        </div>
    )
}

export default Display;