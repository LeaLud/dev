//Intercambiando entre clases con la función toggle()
function toggleClasses() {
    document.getElementById('p-toggle-classes').classList.toggle('highlight-text');
}

document.getElementById('toggle-classes').addEventListener('click', toggleClasses)

//Agregando el atributo hidden a un elemento para ocultarlo y definiendo un condicional para volverlo a mostrar
const buttonChangeAttribute = document.getElementById('cambiar-atributo');
const codeBlock = buttonChangeAttribute.nextSibling.nextSibling;

let statusCheck = 1;
function ChangeAttribute() {
    if( statusCheck === 1) {
        codeBlock.setAttribute('hidden', 'hidden');
        statusCheck = 2;
    } else {
        codeBlock.removeAttribute('hidden', 'hidden');
        statusCheck = 1;
    }
}

buttonChangeAttribute.addEventListener('click', ChangeAttribute);
