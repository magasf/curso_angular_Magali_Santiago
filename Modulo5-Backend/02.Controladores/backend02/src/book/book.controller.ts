import { BadRequestException, Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { IBook } from './book.model';

@Controller('books')
export class BookController {

    // http://localhost:3000/books
    @Get()
    findAll(): IBook[] {
        let book1: IBook = {
            id: 1,
            title: 'Libro 1',
            price: 29.99,
        };
        let book2: IBook = {
            id: 2,
            title: 'Libro 2',
            price: 29.99,
        };
        return [book1, book2];
    }

    // findById http://localhost:3000/books/1
    /* @Get(':id')
    findById(@Param('id') id: string): IBook {
        console.log(typeof(id)); // string
        return {
            id: parseInt(id, 10),
            title: 'Book',
            price: 30.0
        }
    }*/
    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): IBook {
        console.log(typeof(id)); // number
        // this.bookService.findById
        return {
            id: id,
            title: 'Book',
            price: 30.0
        }
    }

    // Post create() http://localhost:3000/books
    @Post()
    create(@Body() book: IBook): IBook { // añadir Auto-validacion
        book.id = 1;

        // validar el libro
            // si es correcto
                // this.bookService.save
            // si no es correcto
                // throw new BadRequestException('El libro no es correcto'); // 400

        return book;
    }

    // Actualizar libro
    // Actualizar Put http://localhost:3000/books
    @Put()
    update(@Body() book: IBook): IBook { // Auto-validación
        // Buscar y comprobar si existe el libro
        // let bookFromDB = this.bookService.findById(book.id)...

        if (true) // si no hay libro no actualizamos
            throw new NotFoundException('Entity Book Not Found, cant update!'); // 404
        
        // Actualizar en base de datos
        // book = this.bookService.save(book)...

        return book; // 200 OK
    }


    // http://localhost:3000/books/1
    @Delete(':id')
    @HttpCode(204) // cambia el status 200 por defecto a 204
    deleteById(@Param('id', ParseIntPipe) id: number) {
        console.log('deleteById ' + id)
        if (false) // si no hay libro no actualizamos
            throw new NotFoundException('Entity Book Not Found, cant delete!'); // 404 Not Found
        
        try {
        // this.bookService.deleteById(id) // 200
        } catch (error) {
            throw new ConflictException('No se puede borrar el libro'); // 409 Conflicto
        }
    }
}
