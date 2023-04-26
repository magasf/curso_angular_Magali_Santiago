import { ICategory } from "./category.model";
import { IFilm } from "./film.model";


let comedia: ICategory = {
    idCategory: 1,
    categoryName: "Comedia",
    color: "Amarillo",
    minAge: 7
}
let drama: ICategory = {
    idCategory: 2,
    categoryName: "Drama",
    color: "Rojo",
    minAge: 12
}
let terror: ICategory = {
    idCategory: 3,
    categoryName: "Terror",
    color: "Negro",
    minAge: 18
}
let accion: ICategory = {
    idCategory: 4,
    categoryName: "Accion",
    color: "Morado",
    minAge: 16
}

let titanic: IFilm = {
    idFilm: 1,
    title: "Titanic",
    minutes: 120,
    rating: 9.9,
    year: 1997,
    categories: [comedia, drama]//Many
}
 
let aTodoGas: IFilm = {
    idFilm: 2,
    title: "A todo gas",
    minutes: 140,
    rating: 8.9,
    year: 2002,
    categories: [comedia, accion]//Many

}



// Bidireccional (Opcional)
// comedia.films?.push(aTodoGas);
// console.log(comedia);

// comedia.films = []

// Opción 1: intentar insertar directamente. No deja porque el atributo es opcional
// comedia.films.push(titanic);

// Opción 2: comprobar el atributo opcional antes de insertar con un if
if(comedia.films !== undefined)
    comedia.films.push(titanic);

// Opción 3: comprobar el atributo opcional con ? antes de la acción
comedia.films?.push(titanic); 

console.log(comedia)