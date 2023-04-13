
let preciosSinIVA = [4.9, 10.24, 40.99, 100.0];
console.log(preciosSinIVA);

//Obtener un array preciosConIVA (21%) utilizando la funcion map:

let IVA = preciosSinIVA => preciosSinIVA * 1.21;
let preciosConIVA = preciosSinIVA.map(IVA);
console.log(preciosConIVA)

//let preciosConIVA =  preciosSinIVA.map(precio=> precio + precio * 0.21); // Otra forma de hacer
