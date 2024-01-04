//Cargando en variables la llamada a los IDs de los input y los textos
const redInput = document.getElementById('red-input')
const greenInput = document.getElementById('green-input')
const blueInput = document.getElementById('blue-input')
const redText = document.getElementById('red-text')
const greenText = document.getElementById('green-text')
const blueText = document.getElementById('blue-text')

//Accediendo a los valores de los input definidos en el HTML
let redValue = redInput.value
let greenValue = greenInput.value
let blueValue = blueInput.value

//Actualizando el texto del párrafo con el valor del value
redText.textContent = redValue
greenText.textContent = greenValue
blueText.textContent = blueValue

//Definiendo el color de fondo al cargar la página por primera vez
const bgColor = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')'

document.querySelector('main').style.backgroundColor = bgColor

//Tomando los valores de los input para crear el estilo de color RGB y asignarlo como fondo del contenedor
function newColor(redValue, greenValue, blueValue) {
    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    document.querySelector('main').style.backgroundColor = rgbColor;
}

//Tomando los cambios en el input rojo para actualizarlos en el texto y cargarlos en el valor RGB rojo
function changeRedValue() {

    //Redefiniendo la variable redValue en la función
    redValue = redInput.value;

    //Actualizando el texto con el valor actualizado del input
    redText.textContent = redValue;

    //Asignando el nuevo valor del input al argumento de la función que define el color de fondo
    newColor(redValue, greenValue, blueValue);
}

function changeGreenValue(valor) {

    //También se puede actualizar el valor de la variable con el token target
    greenValue = valor.target.value;
    greenText.textContent = greenValue;
    newColor(redValue, greenValue, blueValue);
}

function changeBlueValue(valor) {
    blueValue = valor.target.value;
    blueText.textContent = blueValue;
    newColor(redValue, greenValue, blueValue);
}

//Creando los listeners sobre los input y pasando el evento "change" más la función que actualiza el texto y el valor de cada color
redInput.addEventListener('change', changeRedValue);
greenInput.addEventListener('change', changeGreenValue);
blueInput.addEventListener('change', changeBlueValue);