import React from 'react';

// Esta bosta solo funciona renderizándola por partes en index.js

const Arrays = () => {
    const userData = [
        {
            id: '1',
            name: 'Shao Khan',
            age: 1000,
            img: ''
        },
        {
            id: '2',
            name: 'Goro Kintaro',
            age: 3000,
            img: ''
        }
    ]
    
    {userData.map((userData, i) => {
        return (
            <div key={i}>
                <h1>{userData.name}</h1>
                <p>{userData.age}</p>
            </div>
        );
    })}
}

export default Arrays;