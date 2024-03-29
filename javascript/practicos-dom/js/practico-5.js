//Definiendo cada elemento através de su ID
const lightDarkButton = document.getElementById('light-dark-icons');
const mainContainer = document.querySelector('main');
const taskInput = document.getElementById('task-input');
const buttonAddTask = document.getElementById('button-add-task');
const taskList = document.getElementById('task-list');

//Definiendo el estado por defecto del tema
let themeStatus = 'light';

//Definiendo el placeholder del input
taskInput.placeholder = 'Introducir nueva tarea';

//Controlando los estados del tema y sus respectivas características
function switchThemeColor() {
    if (themeStatus === 'light') {
        document.body.classList.add('dark');
        lightDarkButton.style.color = 'whitesmoke';
        lightDarkButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
    </svg>`;
    themeStatus = 'dark';
    } else {
        document.body.classList.remove('dark');
        lightDarkButton.style.color = '';
        lightDarkButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
    </svg>`;
        themeStatus = 'light';
    }
}

//Asociando el evento de clic y la función al icono de cambio de tema
lightDarkButton.addEventListener('click', switchThemeColor);

//Añadiendo una nueva tarea
function addTask() {
    //Comprobando si existe contenido en el input para crear un nuevo elemento de lista
    if (taskInput.value) {
        let newTask = document.createElement('li');

        //Asociándole la clase al nuevo elemento lista
        newTask.classList.add('task');

        //Creando un párrafo para agregar dentro del nuevo elemento lista
        let newTaskText = document.createElement('p');

        //Actualizando el texto del nuevo elemento párrafo con el valor ingresado por el usuario
        newTaskText.textContent = taskInput.value;

        //Asociando al elemento lista el elemento párrafo con el valor ingresado por el usuario
        newTask.appendChild(newTaskText);

        //Asociando la nueva tarea li y p al elemento padre ul
        taskList.appendChild(newTask);

        //Eliminando del input el valor ya cargado
        taskInput.value = '';

        //Creando los contenedores de los iconos
        let icon1 = document.createElement('div');
        let icon2 = document.createElement('div');

        //Asociando la clase correspondiente a los contenedores
        icon1.classList.add('icon');
        icon2.classList.add('icon');

        //Eventos para los estados de los íconos
        icon1.addEventListener('click', completeTask);
        icon2.addEventListener('click', dropTask);

        //Asociando los contenedores de íconos a la lista de tareas
        newTask.appendChild(icon1);
        newTask.appendChild(icon2);

        //Creando los iconos de completado y eliminar
        icon1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        </svg>`;

        icon2.innerHTML = `<svg id="dropTaskIcon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path class="icon2path" d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        <path class="icon2path" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>`;
    } else {
        alert('No se ha introducido algún valor')
    }

    if (taskList.children.length != 0) {
        taskList.previousElementSibling.innerHTML = '<p>Lista de tareas</p>';
    }
}

let doneTaskIcon = document.getElementById('done-task-icon');

function completeTask(e) {
    
    //Obteniendo el nodo padre del nodo padre del objeto al que se le aplicó la acción de click
    let currentTask = e.target.parentNode.parentNode;

    //Si el valor de la clase de la tarea es 'task', se le agrega la clase 'done-task' y se cambia el ícono a chequeado
    if (currentTask.classList.value === 'task') { 
        currentTask.classList.add('done-task');
        e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
        </svg>`;
    } else {

        //Si el valor de la clase no es estrictamente 'task' se le quita la clase 'done-task' y se cambia el ícono a cuadrado sin chequear
        currentTask.classList.remove('done-task');
        e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        </svg>`;
    }
}

//Identificando la tecla que pulsa el usuario
function userKeyDown(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}

//Seleccionando el elemento li que se eliminará al ejecutar la función
function dropTask(e) {

    //Obteniendo el nodo padre del nodo padre del objeto al que se le aplicó la acción
    let currentTask = e.target;

    if (currentTask.classList.value === 'icon') {

    } else if (currentTask.id === 'dropTaskIcon') {
        currentTask = e.target.parentNode.parentNode;
        currentTask.remove();
    } else if (currentTask.classList.value === 'icon2path') {
        currentTask = e.target.parentNode.parentNode.parentNode;
        currentTask.remove();
    }
    if (taskList.children.length === 0) {
        taskList.previousElementSibling.innerHTML = '';
    }
}

//Definiendo un evento para agregar la tarea al hacer clic sobre el botón +
buttonAddTask.addEventListener('click', addTask);

//Definiendo un evento para agregar la tarea al presionar Enter
taskInput.addEventListener('keydown', userKeyDown);

//
function probando () {
    if (taskList.children.length === 0) {
        taskList.previousElementSibling.innerText = '';
        console.log(taskList.children.length);
    } else {
        taskList.previousElementSibling.innerText = '';
        console.log(taskList.children.length);
    }
}

