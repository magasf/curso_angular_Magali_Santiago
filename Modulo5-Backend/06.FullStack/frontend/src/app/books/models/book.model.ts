import { IAuthor } from "src/app/authors/models/author.model";
import { ICategory } from "src/app/categories/models/category.model";

export interface IBook {
  id: number;
  title: string;
  isbn: string;
  price: number;
  quantity: number;
  published: boolean;
  sinopsis: string;
  release: Date;
  numPages: number;
  photo: string;
  author: IAuthor;
  categories: ICategory[];
  images?: string[];
}
