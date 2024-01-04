//Llamada al botón
let varButton = document.getElementById('boton-color');

//Llamada al texto del código de color
let colorCode = document.getElementById('codigo-color')

//Generando un código hexadecimal aleatorio
function newHexaColor() {

    //Definiendo una variable con todos los caracteres posibles en el código de color hexadecimal
    let charts = '0123456789ABCDEF';
    let hexaColor = '#';

    //Bucle para obtener 6 caracteres de la variable charts
    for (let i = 0; i < 6; i++) {

        //Función para seleccionar de forma aleatoria de 0 a 15 un índice del string cargado en la variable charts
        let randomIndex = Math.floor(Math.random() * 16);

        //Actualizando la variable hexaColor con los 6 caracteres obtenidos en las 6 iteraciones
        hexaColor += charts[randomIndex];
    }
    
    //Retornando el código hexadecimal completo
    return hexaColor
}

//Ejecutando la función que genera el código de color para cargarlo en la variable randomColor
function functRandomColor () {
    randomColor = newHexaColor()

    //Actualizando el texto del código de color
    colorCode.textContent = randomColor;

    //Cambiando el color de fondo del contenedor principal
    document.querySelector('main').style.backgroundColor = randomColor;
}

//Ejecutando la función para que se defina un color aleatorio al cargar la página
functRandomColor ()

//Asociando el evento de clic al botón
varButton.addEventListener('click', functRandomColor)