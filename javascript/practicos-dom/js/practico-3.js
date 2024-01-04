//Citas
const citas = [
    {
        cita: 'El mal crece donde triunfa la ignorancia',
        autor: 'Peridofia',
        plano: 'Theros Beyond Death'
    },
    {
        cita: 'Perfecto, ahora repítelo',
        autor: 'Naban',
        plano: 'Dominaria'
    },
    {
        cita: 'Un problema solo es tal sino se dispone de las herramientas necesarias para corregirlo',
        autor: 'Jhoira',
        plano: 'Dominaria'
    },
    {
        cita: 'Un error no es más que otra oportunidad de hacerlo mejor',
        autor: 'Innovator',
        plano: 'Kaladesh'
    },
    {
        cita: 'Todos son bienvenidos',
        autor: 'Manicomio Geier',
        plano: 'Eldritch Moon'
    }
]

//Definiendo cada elemento através de su ID
const cita = document.getElementById('cita');
const autor = document.getElementById('autor');
const plano = document.getElementById('plano');
const botonSiguienteCita = document.getElementById('siguiente-texto')

//Asignando estilos a los textos;
cita.style.fontStyle = 'italic';
cita.style.fontSize = '24px';
autor.style.fontSize = '20px';
autor.style.color = '#666';
plano.style.fontWeight = '700';

//Generando un entero aleatorio
function generarNumEntero(min, max) {
    return Math.floor(Math.random() * (max - min) - min);
}

//Usando el número aleatorio para acceder a un elemento del arreglo y cambiar los textos de cada una de sus propiedades
function cambiarCita() {

    //Ejecutando la función que genera el número aleatorio
    let randomIndex = generarNumEntero(0, citas.length)

    //Cambiando los textos
    cita.textContent = '"' + citas[randomIndex].cita + '"';
    autor.textContent = citas[randomIndex].autor;
    plano.textContent = `- ${citas[randomIndex].plano} -`;
}

//Definiendo una cita aleatoria al cargar la página por primera vez
cambiarCita()

//Creando el listener para ejecutar la función que cambia los textos al hacer clic sobre el botón
botonSiguienteCita.addEventListener('click', cambiarCita)