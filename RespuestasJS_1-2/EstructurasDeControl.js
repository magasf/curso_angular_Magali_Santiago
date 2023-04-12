
/*
1. Uso de la estructura if-else
    1- Crea una variable numero y asígnale un número entero.
    2- Escribe una estructura if-else que muestre en consola si el número es positivo, negativo o cero.

*/ 
let numero = 2;
if (numero > 0) {
    console.log(`El numero ${numero} es positivo`)
    
} if (numero < 0) {
    console.log(`El numero ${numero} es negativo`)
    
} if (numero == 0){
    console.log(`El numero ${numero} es cero`)
}
/**
 * 2. Uso de la estructura switch
    1- Crea una variable fruta y asígnale el nombre de una fruta.
    2- Utiliza una estructura switch para determinar si la fruta es roja (manzana, fresa), amarilla
    (plátano, piña) o de otro color (naranja, uva) y muestra el resultado en consola.

 */
let fruta = "manzana";


    switch (fruta) {
        case "manzana":
            console.log(`La ${fruta} es roja`)
            
            break;
        case "banana","piña":
            console.log(`La ${fruta} es amarilla`)
            break;
    
        default:
            console.log(`La ${fruta} es de otro color`)
            break;
    }

/**
 * 3. Uso de bucle for
    1. Escribe un bucle for que muestre en consola los números del 1 al 10.
 */

for (let i = 1; i <=10 ; i++) {
    console.log(i)
    
}

/**
 * 4. Uso de bucle while
    1. Escribe un bucle while que muestre en consola los números del 1 al 10.
 */
console.log("--------------------");
console.log("--------------------");

i = 0
while (i<=10) {
    console.log(i);
    i++;
}
console.log("--------------------");
console.log("--------------------");
/**
 * 5. Uso de bucle do-while
    1. Escribe un bucle do-while que muestre en consola los números del 1 al 10.
 */

h = 1
do {
    console.log(h);
    h++;
    
} while (h<=10);


console.log("--------------------");
console.log("--------------------");

/**
 * 6. Uso de bucle for anidado
    1. Escribe un bucle for anidado que muestre en consola una tabla de multiplicar del 1 al 10
 */

let edad = 17
if (edad >= 18) {
    for (let i = 0; i < 10; i++) {
        console.log(i);
        
    }
    
}else{
    console.log(`Su edad es ${edad}, no cumple con los requisitos de mayoria de edad`);
}