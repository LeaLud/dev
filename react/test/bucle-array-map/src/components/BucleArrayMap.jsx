import React from 'react';

// Obteniendo el array en JavaScript o en JSON
const taskList = [
    {
        id: 1,
        title: 'Primera tarea',
        author: 'Leandro',
        startDate: '11/04/2024',
        endDate: '1204/2024'
    },
    {
        id: 2,
        title: 'Segunda tarea',
        author: 'Federico',
        startDate: '09/04/2024',
        endDate: '11/04/2024'
    },
    {
        id: 3,
        title: 'Tercera tarea',
        author: 'Ludueña',
        startDate: '05/04/2024',
        endDate: '15/05/2024'
    },
    {
        id: 4,
        title: 'Programar',
        author: 'Leandro',
        startDate: '10/04/2024',
        endDate: '12/05/2024'
    },
    {
        id: 5,
        title: 'Estudiar y testear',
        author: 'Federico',
        startDate: '20/04/2024',
        endDate: '22/05/2024'
    }
]

const BucleArrayMap = () => {
    return (

        //Llamando el array para repasar cada uno de sus elementos con .map()
        taskList.map((task, i) => (
            <ul key={i}>
                <li><p>ID: {task.id}</p></li>
                <li><h1>{task.title}</h1></li>
                <li><h3>{task.author}</h3></li>
                <li><p><strong>Fecha de inicio:</strong> {task.startDate}. <strong>Fecha de fin:</strong> {task.endDate}</p></li>

            </ul>
        ))
    )
}

export default BucleArrayMap;