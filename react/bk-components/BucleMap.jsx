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

const BucleMap = () => {
    return (
        <div>
            {taskList.map((task, i) => (
                <ul key={i}>
                    <li>{task.title}</li>
                    <li>{task.author}</li>
                    <li>{task.startDate}</li>
                    <li>{task.endDate}</li>
                </ul>
            ))}
        </div>
    )
}

/*const BucleMap = () => {
    return (
        <div>
            {taskList.map((task) => (
                <ul key={task.id}>
                    <li>{task.title}</li>
                    <li>{task.author}</li>
                    <li>{task.startDate}</li>
                    <li>{task.endDate}</li>
                </ul>
            ))}
        </div>
    )
}*/

export default BucleMap;