import React from 'react';
import { FcAcceptDatabase } from "react-icons/fc";
import { FcCloseUpMode } from "react-icons/fc";
import { FcBiohazard } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import '../App.css';

const ReactIcons = (props) => {

    return (
        <ul id='iconList' style={
            {fontSize: props.fontSize}
        }>
            <li>
                <FcAcceptDatabase

                /> {props.listValue1}
            </li>
            <li>
                <FcCloseUpMode

                /> {props.listValue2}
            </li>
            <li>
                <FcBiohazard

                /> {props.listValue3}
            </li>
            <li>
                <FcCurrencyExchange

                /> {props.listValue4}
            </li>
        </ul>
    )
}

export default ReactIcons;