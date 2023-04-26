import { IFilm } from "./film.model";

/**
 * Representa categoria o genero de pelicula, por ejemplo: comedia, accion, terror, ciencia ficcion, etc
 */
export interface ICategory {
    idCategory: number,
    categoryName: string,
    color: string,
    minAge: number,
    films?: IFilm[]
    //fromato(enum)
}