import './App.css';
import tasks from './data/tasks.json';

console.log(tasks);

function App() {
    return (
        tasks.map(task => (
            <ul key={task.id}>
                <li>{task.id}- |<h2>{task.titulo}</h2>
                    <ol>
                        <li>{task.descripcion}</li>
                        <li>Fecha de inicio {task.fecha_agregado}</li>
                        <li>Fecha de fin {task.fecha_fin}</li>
                    </ol>
                </li>
            </ul>
        ))
    );
}

export default App;
