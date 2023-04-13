/**
 * 1. Crear y manipular un Array
    1. Crea un array llamado frutas que contenga tres frutas: "manzana", "plátano" y "naranja".
    2. Agrega una fruta al final del array usando el método push.
    3. Elimina la primera fruta del array usando el método shift.
    4. Muestra en consola la longitud del array.
 */

let frutas = ["manzana", "platano", "naranja"];
let frutaAgregada1 = frutas.push("pomelo");
console.log(frutas)
let primeraFruta = frutas.shift();
console.log(frutas);
console.log(frutas.length);

/**
 * 2. Iterar sobre un Array
    1. Crea un array llamado numeros que contenga los números del 1 al 5.
    2. Utiliza un bucle for para iterar sobre el array e imprimir cada número en consola.
 */

let numeros = [1, 2, 3, 4, 5];


  for (let i = 0; i < numeros.length; i++) {
     const e = numeros[i];
     console.log(e);
  }
 
for (let i = numeros.length-1; i > 0; i--) {
   
   console.log(numeros[i]);
   
}
 for (let numero of numeros)
  console.log(numero);

/**
   * 3. Uso de map, filter y reduce en Arrays
      1. Crea un array llamado calificaciones que contenga calificaciones numéricas (por ejemplo, 85,
      90, 78, 92, 88).
      2. Utiliza el método map para aumentar cada calificación en 5 puntos.
      3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
      4. Utiliza el método reduce para calcular la calificación promedio
*/

let calificaciones = [85, 90, 78, 92, 88];
console.log(calificaciones);

let sumar5 = calificaciones => calificaciones + 5;
console.log(calificaciones.map(sumar5));
let calificacionesDefinitivas = calificaciones.map(sumar5);
console.log(calificacionesDefinitivas);

/**
 * 4. Crear y manipular un Objeto
      1. Crea un objeto llamado persona con las propiedades nombre, apellido, edad y ciudad.
      2. Cambia el valor de la propiedad ciudad a una nueva ciudad.
      3. Agrega una propiedad ocupacion al objeto.
      4. Muestra en consola todas las propiedades y sus valores usando un bucle for…in.
 */

