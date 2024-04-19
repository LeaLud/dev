import React from 'react';
import '../css/Component.css';
import '../css/Component2.css';

const PropsPredefinidas = ({age, user = 'pepe'}) => {
    /*const user = {
        firstName: 'Leandro', lastName: 'Ludueña'
    }*/
    return (
        <table>
            <tbody>
                <tr>
                    <td>{age}</td>
                </tr>
                <tr>
                    <td>{user.firstName}</td>
                </tr>
                <tr>
                    <td>{user.lastName}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default PropsPredefinidas;