// IMPRIMIR UN VALOR
console.log('Hello world!!')
console.log(9 * 5)

// DEFINIR UNA CONSTANTE (VARIABLE ESTÁTICA)
const apellido = 'Ludueña'
const varFinJS = '***************Fin del archivo JS***************'

// DEFINIR UNA VARIABLE DINÁMICA
let nombre = 'Leandro'

// IMPRIMIR LOS VALORES DE LAS VARIABLES
console.log(nombre)
console.log(apellido)
console.log(nombre, apellido)
console.log(nombre + apellido)

// TIPOS DE DATOS PRIMITIVOS
//  Strings, cadenas de texto
let string = "Esto es un string"

//  Numbers, números
let number = 9

//  Booleanos, verdadero o falso
let boolean = false
boolean = true

console.log(string)
console.log(number)
console.log(boolean)

//  Null, valor nulo
string = null
number = null
boolean = null

console.log(string)
console.log(number)
console.log(boolean)

//  Undefined, valor no definido, viene por defecto al no definir una variable
let undefinedVar

console.log(undefinedVar)

// VER EL TIPO DE DATO DE UNA VARIABLE
console.log(typeof string)
console.log(typeof number)
console.log(typeof boolean)

// OPERACIONES CON VARIABLES
valor1 = 90
valor2 = 120

const suma = (valor1, valor2) => {
    return valor1 + valor2
}

const sumaVariables = (suma(valor1, valor2))
console.log(sumaVariables)

// FUNCTION EXPRESSION
const promedio = (valor1, valor2, valor3, valor4) => {
    console.log('los valores de la función son', valor3, valor2, valor4, valor1)
    return valor1 + valor2 + valor3 / valor4
}

const resultadoPromedio = (promedio(1000, 400, 500, 3))

console.log('el promedio es', resultadoPromedio)


// FUNCTION DECLARATION
function myFunction(){
    return 'String desde función'
}

varFun = myFunction()

console.log(varFun, myFunction())

// IMPRIMIR VARIABLES EN MAYÚSCULAS
// Se debe volver a definir una variable a la cual se le asignará el Uppercase sobre la variable a modificar
const apellidoMayuscula = apellido.toUpperCase()
console.log(apellidoMayuscula)

// ARRAY, LISTA DE VALORES-----------------*/
const myList = ['Leandro', 'empleado', 'Argentina', 37, 'Leandro']

console.log(myList)
console.log(myList[0])
console.log(myList[2])

// AGREGAR VALORES AL ARRAY-----------------*/
myList.push(9)
myList.push('Italia')
myList.push(22)

// CONCATENAR VALORES A UN ARRAY LISTA
const list2Array = myList.concat(500).concat('Primer Mundo')

console.log(list2Array)

// SET, LISTA DE VALORES SIN REPETIDOS
const mySet = new Set(['Leandro', 'interestelar', 'Argentina', 37, 'Leandro'])

console.log(mySet)

// AGREGAR VALORES AL SET-----------------*/
mySet.add('Ludueña')

console.log(mySet)

// MAP, LISTA DE CLAVE/VALOR
const myMap = new Map ([['Leandro', 37], ['Federico', 38], ['Ludueña', 39]])

console.log(myMap)
console.log(myMap.get('Federico'))

// AGREGAR VALORES AL MAP-----------------*/
myMap.set('Clave', 1)

console.log(myMap)

// OBJETOS
const usuario = {
    nombre: 'Leandro',
    apellido: 'Ludueña',
    edad: 37,
    ocupación: ['web design', 'bartender', 'developer'],
    disponibilidad: true
}

console.log(usuario)
console.log(usuario.disponibilidad)
console.log(usuario.ocupación[1])
console.log(typeof usuario)

// CONTROL DE FLUJO, CONDICIONES
let elNumero = 12
let occupation = true

if (elNumero == 10 && occupation == true){
    console.log('se imprime')
} else if (elNumero == 11 && occupation == false){
    console.log('ahora es 11')
} else if (elNumero == 12 || occupation == false){
    console.log('esto da 12')
}
else{
    console.log('no se imprime')
}

// BUCLES, SE APLICAN SOBRE OBJETOS
for (const valor of myList){
    console.log(valor, 'Mi lista')
}

for (const valor of mySet){
    console.log(valor, 'Mi set')
}

for (const valor of myMap){
    console.log(valor, 'Mi mapa')
}

myCounter = 6
console.log(myCounter)

while (myCounter < myList.length){
    console.log(myList[myCounter])
    myCounter++
}

const contador = myList.length
console.log(contador, 'Longitud del contador')


// CLASES
class MyClass {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

let clase = new MyClass('Leandro', 37)

console.log(clase)
console.log(clase.nombre)
console.log(clase.edad)
console.log(clase.nombre, 'y', clase.edad)

// ENUM
const MyEnum = {
    HTML: 'html',
    CSS: 'css',
    JSCRIPT: 'jscript',
    REACT: 'React'
}

const myEnum = MyEnum

console.log(myEnum)
console.log(myEnum.HTML)
console.log(myEnum.REACT)
console.log(myEnum.CSS, myEnum.JSCRIPT)

// FIN ARCHIVO
console.log(varFinJS)


//Pruebas JavaScript




















function myFunction(dato) {
    let datos = {
        "Nombre": "Leandro",
        "Apellido": "Ludeña",
        "Edad": 37,
        "Ocupación actual": "Web developer"
    }

    return datos[dato]
}

console.log(myFunction("Ocupación actual"))