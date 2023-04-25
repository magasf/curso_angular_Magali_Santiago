/**
 * Si crear objetos "modelos de datos" que simplemente tienen atributos por ejemplo
 * para leer/traer/consumir datos de un API REST o una URL podemos ultilizar interfaces
 * para declarar esos atributos y crear objetos a partir de esas interfaces de forma sencilla
 * 
 * Luego los metodos y comportamiento se podrian separar a otra clase por ejemplo BooksService
 * 
 * De esta forma tendriamos:
 * Ibook: Modelo de datos(interface)
 * BookService: Servicio con llogica de negocio (metodos, comportamiento) sobre objetos libro
 * 
 * 
 * MVC - Modelo Vista Controlador
 */
interface IBook{
    id: number;
    title: string;
    author: string;
    year: number;
    editorial: string;
    numPages: number;
}

let book1: IBook = {
    id: 1,
    title: "book1",
    author: "author1",
    year: 2023,
    editorial: "Planeta",
    numPages: 345
}
console.log(book1.title);

let book2: IBook ={
    id: 2,
    title: "book2",
    author: "author2",
    year: 2024,
    editorial: "Maning",
    numPages: 422
}
console.log(book2.title)