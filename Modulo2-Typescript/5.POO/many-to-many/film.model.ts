import { ICategory } from "./category.model";


export interface IFilm {
    idFilm: number,
    title: string,
    minutes: number,
    rating: number,
    year: number,
    categories: ICategory[]
}