import { Injectable } from '@nestjs/common';
import { IBook } from './book.model';

@Injectable()
export class BookService {
    private books: IBook[] = [
        {id: 1, title: 'Book 1', price: 49.99},
        {id: 2, title: 'Book 2', price: 49.99},
        {id: 3, title: 'Book 3', price: 49.99},
        {id: 4, title: 'Book 4', price: 49.99},
    ];

    constructor(){

    }

    findAll(): IBook[]{
        return this.books;
    }
    findById(id: number): IBook | undefined{
        return this.books.find(book => book.id === id);//finde devuelve
    }

    public save(book: IBook): IBook {
        this.books.push(book)
        return book;
    }
    public update(book: IBook): IBook{
        let position = this.books.findIndex(
            current => current.id === book.id
        );
        if(position === -1)
            throw new Error("404 not found");
          
        this.books[position].title = book.title;
        this.books[position].price = book.price;
         
         return book;
    }
    public deleteById(id: number): boolean{
        let position = this.books.findIndex(
            current => current.id === id
        );
        if(position === -1)
        throw new Error("404 not found");

        return this.books.splice(position, 1). length === 1;
    }
}
