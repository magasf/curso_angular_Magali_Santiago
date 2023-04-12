/**
 * 1. Crear una función simple
    1. Escribe una función llamada saludar que acepte un argumento nombre y muestre en consola
    un saludo personalizado, por ejemplo, "¡Hola, Juan!"
 */

let nombre = "Juan"

function saludar(nombre) {

    console.log(`Hola ${nombre}`)

    
}
saludar(nombre)

/**
 * 2. Crear una función con múltiples
    argumentos y retorno
    1. Escribe una función llamada sumar que acepte dos argumentos a y b, calcule su suma y
    devuelva el resultado.

 */
let a = 4;
let b = 7;
function sumar(a,b) {
    let suma = a + b
    return suma
    
}
sumar(a,b)