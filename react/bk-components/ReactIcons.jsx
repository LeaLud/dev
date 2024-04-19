import React from 'react';
import { FcAcceptDatabase } from "react-icons/fc";
import { FcCloseUpMode } from "react-icons/fc";
import { FcBiohazard } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import '../css/css.css';

const ReactIcons = (props) => {
    return (
        <ul className='iconList'>
            <li><FcAcceptDatabase />{props.contentList}</li>
            <li><FcCloseUpMode />{props.contentList}</li>
            <li><FcBiohazard />{props.contentList}</li>
            <li><FcCurrencyExchange />{props.contentList}</li>
        </ul>
    )
}

export default ReactIcons;