import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) {}

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    findById(@Param("id") id: number): Promise<Book | null> {
        return this.bookService.findById(id);
    }

    @Get('title-eq/:title') // http://localhost:3000/books/title-eq/book1
    findAllByTitleEquals(@Param("title") title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleEquals(title);
    } 

    @Get('title-like/:title') // http://localhost:3000/books/title-like/libro
    findAllByTitleLike(@Param('title') title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleLike(title);
    }

    @Get('price/min/:min/max/:max')
    findAllByPriceBetween(
        @Param('min') min: number, 
        @Param('max') max: number): Promise<Book[]> {
        return this.bookService.findAllByPriceBetween(min, max);
    }

}