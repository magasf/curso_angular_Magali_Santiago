import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) {}

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get('id/:id')
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

    @Get('published')
    findAllByPublishedTrue(): Promise<Book[]> {
        return this.bookService.findAllByPublishedTrue();
    }

    @Get('quantity/:quantity/price/:price')
    findAllByQuantityAndPrice(
        @Param('quantity') quantity: number,
        @Param('price') price: number): Promise<Book[]> {

            return this.bookService
            .findAllByQuantityAndPrice(quantity, price);
    }
    
    @Get('ordered-by-price-asc')
    findAllOrderByPriceAsc(): Promise<Book[]> {
        return this.bookService.findAllOrderByPriceAsc();
    }

    /**
     * 
     * {"id": 1,
        "title": "Libro Posman",
        "isbn": "0932479",
        "price": "45.80",
        "createdDate": "2023-06-20T11:05:12.602Z",
        "quantity": 3,
        "published": false}
     */

    @Post()
    async create(@Body() book: Book): Promise <Book>{
        return await this.bookService.create(book);
    }

    @Put()
    async update(@Body()book: Book): Promise<Book>{
        return await this.bookService.update(book);
    }
    
    @Delete()
    async deleteById(@Param('id') id: number){
        this.bookService.deleteById(id)
    }






}
