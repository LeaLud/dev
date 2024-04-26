import React, { useState, useEffect } from 'react';

// Definiendo el useState con un array vacío
const KeyLogger = () => {
    
    const [pressedKeys, setPressedKeys] = useState([]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            setPressedKeys(prevKeys => [...prevKeys, key])
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        };
    }, []);

    return (
        <div>
            <h2>Keylogger</h2>
            <ul>
                {pressedKeys.map((key, index) => (
                <li key={index}>{key}</li>
                ))}
            </ul>
        </div>
    )
}

export default KeyLogger;