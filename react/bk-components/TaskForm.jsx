import { React, useState } from 'react';

const TaskForm = (createTask) => {

    const [taskValue, setTaskValue] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        const newTask = {
            taskValue
        }
        createTask(newTask)
    }

    return (
        <form onSubmit={submitForm}>
            <input placeholder='Ingresar tarea' onChange={
                (e) => {
                    setTaskValue(e.target.value)
                }
            } />
            <button>Aceptar</button>
        </form>
    )
}

export default TaskForm;