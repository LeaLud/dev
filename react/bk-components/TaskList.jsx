import React from 'react';
import taskList from '../taskList.js';

const TaskList = () => {
    
    return (
        <div>
            {taskList.map((task) => (
                <div key={task.id}>
                    <small>ID: {task.id}</small>
                    <h2>{task.title}</h2>
                    <h3>A cargo de {task.author}</h3>
                    <p>Desde <strong>{task.startDate}</strong> hasta <strong>{task.endDate}</strong></p>
                    <hr />
                    <br />
                </div>
            ))}
        </div>
    )
}

export default TaskList;