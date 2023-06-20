import { IAuthor } from "src/authors/authors.model";

export interface IBook{
    id: number;
    title: string;
    price: number;
    author: IAuthor;

}