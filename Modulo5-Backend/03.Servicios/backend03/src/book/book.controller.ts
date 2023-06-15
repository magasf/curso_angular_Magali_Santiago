import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { IBook } from './book.model';

@Controller('book')
export class BookController {

    constructor(private bookService: BookService){}

    @Get()
    findAll(): IBook[]{
        return this.bookService.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): IBook {
        
        let book = this.bookService.findById(id);
        if(!book)
            throw new NotFoundException('No existe')

        return book;
    }
    //TODO findBytitleContains

    @Post()
    create(@Body() book: IBook): IBook { // añadir Auto-validacion
        
        return this.bookService.save(book);
    }

    @Put()
    update(@Body() book: IBook): IBook { // Auto-validación
        
        return this.bookService.update(book); // 200 OK
    }

    @Delete(':id')
    @HttpCode(204) // cambia el status 200 por defecto a 204
    deleteById(@Param('id', ParseIntPipe) id: number) {
        this.bookService.deleteById(id);
    }

}



