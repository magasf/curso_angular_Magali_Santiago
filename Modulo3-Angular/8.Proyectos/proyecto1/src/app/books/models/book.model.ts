import { ICategory } from "src/app/categories/models/category.model";

export interface IBook {
    // atributos
    id: number;
    title: string;
    sinopsis: string;
    release: Date;
    numPages: number;
    photo: string;
    price: number;
    // asociaciones, relaciones con otros modelos 
    authorId: number;
    categories: number[];
}
