//Definiendo cada elemento através de su ID
const cronometro = document.getElementById('cronometro');
const startPauseButton = document.getElementById('boton-inicio-pausa');
const stopButton = document.getElementById('boton-detener');

//Definiendo el cronómetro en cero
let horas = 0;
let minutos = 0;
let segundos = 0;

//Estas variables también se pueden definir como un arreglo
//let [horas, minutos, segundos] = [0, 0, 0]

//Definiendo una variable global para usar más adelante
let intervaloDeTiempo;

//Definiendo el estado de pausa del cronómetro
let estadoCronometro = 'pausado';

//Actualizando el contador al ser puesto en funcionamiento
function actualizarCronometro() {
    segundos++

    if(segundos / 60 === 1) {
        segundos = 0
        minutos++

        if (minutos / 60 ===1) {
            minutos = 0
            horas++
        }
    }

    //Definiendo variables para agregar un '0' cuando el intervalo de tiempo sea de un solo dígito
    const segundosFormateados = asignarFormato(segundos);
    const minutosFormateados = asignarFormato(minutos);
    const horasFormateadas = asignarFormato(horas);

    //Actualizando el texto del cronómetro
    cronometro.textContent = horasFormateadas + ':' + minutosFormateados + ':' + segundosFormateados;
}

//Agregando un '0' cuando el intervalo de tiempo sea de un solo dígito
function asignarFormato(tiempo) {
    return tiempo < 10 ? '0' + tiempo : tiempo;
}

//Cambiando los estados del cronómetro al presionar 'Play / Pause'
function activarPausarCronometro() {
    if (estadoCronometro === 'pausado') {
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        startPauseButton.textContent = 'Pause';
        startPauseButton.classList.remove('play-bg');
        startPauseButton.classList.add('pause-bg');
        estadoCronometro = 'corriendo';
    } else {
        window.clearInterval(intervaloDeTiempo);
        startPauseButton.textContent = 'Play';
        startPauseButton.classList.remove('pause-bg');
        startPauseButton.classList.add('play-bg');
        estadoCronometro = 'pausado';
    }
}

//Asociando un evento de clic al botón 'Play' para poner en funcionamiento el cronómetro
startPauseButton.addEventListener('click', activarPausarCronometro)

//Reseteando el cronómetro
function resetCronometro() {
    window.clearInterval(intervaloDeTiempo);

    //Reseteando los intervalos de tiempo
    horas = 0;
    minutos = 0;
    segundos = 0;

    //Cambiando el texto del cronómetro
    cronometro.textContent = '00:00:00';

    //Reseteando los estilos y el texto del botón 'Play'
    startPauseButton.classList.remove('pause-bg');
    startPauseButton.classList.add('play-bg');
    startPauseButton.textContent = 'Play';

    //Recuperando el estado de pausa
    estadoCronometro = 'pausado';
}

//Asociando un evento de clic al botón 'Stop' para detener y reiniciar el cronómetro
stopButton.addEventListener('click', resetCronometro)