/**
 * 1. Crear una función simple
    1. Escribe una función llamada saludar que acepte un argumento nombre y muestre en consola
    un saludo personalizado, por ejemplo, "¡Hola, Juan!"
 */

 

 function saludar(nombre) {

     console.log(`Hola ${nombre}`)


 }
 saludar("Juan")

/**
 * 2. Crear una función con múltiples
    argumentos y retorno
    1. Escribe una función llamada sumar que acepte dos argumentos a y b, calcule su suma y
    devuelva el resultado.

 */

function sumar(a,b) {
    let suma = a + b
    return suma
    
    
}
console.log(sumar(7,8));

/**
 * 3. Crear una función anónima y asignarla a
    una variable
    1. Escribe una función anónima que acepte un número y devuelva su cuadrado. Asigna esta
    función a una variable llamada calcularCuadrado.
 */

const cuadrado = x => x*x;
const calcularCuadrado = cuadrado(9)
console.log(calcularCuadrado)

/**
 * 4. Crear una función de flecha
    1. Escribe una función de flecha llamada multiplicar que acepte dos argumentos a y b, y devuelva
    su producto
 */
const multiplicar =(a,b)=> a * b;

console.log(multiplicar(3,6));

/**
 * 5. Crear una función que utilice otra función
    1. Escribe una función llamada operacion que acepte tres argumentos: a, b y una función
    operador. La función operacion debe ejecutar la función operador con los argumentos a y b y
    devolver el resultado
 */

    function operacion(a,b, operador) {
        return operador(a,b)

    }
    let resultadoSuma = operacion(5,3,sumar)
    console.log(resultadoSuma)

    let resultadoMultiplicar = operacion(5,3, multiplicar);
    console.log(resultadoMultiplicar)

/**
 * 6. Crear una función que devuelve otra
    función
    1. Escribe una función llamada crearMultiplicador que acepte un argumento factor. La función
    debe devolver otra función que acepte un número y devuelva el resultado de multiplicar ese
    número por el factor dado
 */
function crearMultiplicador(factor) {
    return function (numero) {
        return factor * numero;
        
    }
    
}
let duplicar = crearMultiplicador(2);
console.log(duplicar(5));