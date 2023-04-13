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

//Opcion 1 con for of
let calificacionesAltas = [];
 for (const calificacion of calificaciones) {
   if (calificacion >= 90) 
      calificacionesAltas.push(calificacion)
   
 }
 console.log(calificacionesAltas)
 console.log("Segunda opcion para resolver") 

 //Opcion 2: con filter y funcion flecha
 const CalificacionesAprobadas = calificaciones.filter(function(calificacion){
   return calificacion >= 90;
 });
 console.log(CalificacionesAprobadas)
console.log("Opcion 3 para resolver")

 //Opcion 3:
 let calificacionesAltas2 = calificaciones.filter(calificacion => calificacion >=90);
console.log(calificacionesAltas2);

//4. 

//Opcion 1: sumar todo con un for y dividir la suma para calcular la media
let sumatorio = 0
for (const calificacion of calificaciones) {
   sumatorio = sumatorio + calificacion;  
}
console.log(`La suma de todas las calificaciones es ${sumatorio} `)

let calificacionMedia = sumatorio/ calificaciones.length;
console.log(`El promedio de las calificaciones es ${calificacionMedia}`); 

//opcion 2
let CalcularSumatorio = (sumatorio, calificacion) =>sumatorio + calificacion;
let sumatorio2 = calificaciones.reduce(CalcularSumatorio,0);
console.log(`Suma total de las calificaciones: ${sumatorio2} y el promedio es igual a `, sumatorio2/calificaciones.length)

/**
 * 4. Crear y manipular un Objeto
      1. Crea un objeto llamado persona con las propiedades nombre, apellido, edad y ciudad.
      2. Cambia el valor de la propiedad ciudad a una nueva ciudad.
      3. Agrega una propiedad ocupacion al objeto.
      4. Muestra en consola todas las propiedades y sus valores usando un bucle for…in.
 */

      //Crear un nuevo objeto a partir de una clase 
      class Persona{
         nombre = "Nombre";
         apellido = "Apellido";
         edad = 18;
         ciudad = "Madrid";

      }

      //Cambiar la ciudad
      const persona1 = new Persona();
      console.log(persona1);

      //Cambiar ciudad
      persona1.ciudad = "Barcelona";
      console.log(persona1);

      //Agregar un nuevo atributo
      persona1.puesto = "Developer";
      console.log(persona1);

      //Agregar un array de telefonos
      persona1.telefonos = ["634566223","362266223"];
      console.log(persona1);
      
      //Muestra en consola todas las propiedades y sus valores usando un bucle for…in.

      for (const key in persona1) {
         if (Persona.hasOwnProperty.call(persona1, key)) {//Comprueba si existe la clave en el objeto
            const element = persona1[key];
            console.log(element);
         }
      }
      //Otra forma

      for (const propiedad in persona1) {
        console.log(`${propiedad} = ${persona1[propiedad]}`);
      }
/**
 * 
for: cuando iteramos sobre una estructura de datos utilizando un i (índice) como posición

for of: cuando iteramos sobre estructuras de datos como arrays, set o mapas y solo queremos los valores

for in: cuando iteramos sobre propiedades de un objeto y necesitamos conocer nombres de atributos y sus valores

forEach: recibe una función y ejecuta ese comportamiento sobre cada elemento de la estructura de datos
 */


     
