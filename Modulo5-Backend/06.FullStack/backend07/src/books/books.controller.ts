import { Body, Controller, Request, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFiles, UseGuards, UseInterceptors, NotFoundException } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';
import { AuthGuard } from '@nestjs/passport';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) {}

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get('load-relations')
    findAllWithRelations(): Promise<Book[]> {
        return this.bookService.findAllWithRelations();
    }

    @Get('projections')
    findAllProjections(): Promise<Book[]> {
        return this.bookService.findAllProjections();
    }

    @Get('author/:authorId')
    findAllByAuthorId(
        @Param("authorId", ParseIntPipe) authorId: number
        ): Promise<Book[]> {
        return this.bookService.findAllByAuthorId(authorId);
    }

    @Get('id/:id')
    findById(@Param("id", ParseIntPipe) id: number): Promise<Book | null> {
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

    /*
    Cambiar ISBN:

    {
        "id": 0,
        "title": "book postman2",
        "isbn": "77777777",
        "price": "11.00",
        "quantity": 1,
        "published": true,
        "author": {
            "id": 1
        },
        "editorial": {
            "id": 1
        }
    }
    */
    @Post()
    async create(@Body() book: Book): Promise<Book> {
        return await this.bookService.create(book);
    }
    

    /*
    Solo actualiza un libro existente, no se debe crear uno nuevo:

    {
        "id": 1,
        "title": "book1",
        "isbn": "1111111",
        "price": "15.00",
        "quantity": 5,
        "published": true,
        "author": {
            "id": 2,
        },
        "editorial": {
            "id": 2,
        }
    }

    */
    @Put()
    async update(@Body() book: Book): Promise<Book> {
        return await this.bookService.update(book);
    }



    @Delete(':id')
    async deleteById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<void> {
        return await this.bookService.deleteById(id);
    }

    
    @Delete('author-id/:authorId')
    async deleteAllByAuthorId(
        @Param('authorId', ParseIntPipe) authorId: number
    ): Promise<void> {
        return await this.bookService.deleteAllByAuthorId(authorId);
    }

    // http://localhost:3000/books/2/images
    @UseGuards(AuthGuard('jwt'))
    @Post(':bookId/images')
    @UseInterceptors(FilesInterceptor('file'))
    async uploadBookImages(
        @Request() request, 
        @Param('bookId', ParseIntPipe) bookId: number,
        @UploadedFiles() files: Express.Multer.File[]
        ){
            console.log(files);
            console.log(files.length);

            // obtener el libro y si no existe lanzar excepción
            let book = await this.bookService.findById(bookId);
            if(!book) throw new NotFoundException('Book not found');
            
            // asociar los nombres de los archivos en el atributo images del objeto book
            book.images = [];
            files.forEach(file => book.images.push(file.filename));

            // guardar el book en base de datos
            return await this.bookService.update(book);
        }

}
