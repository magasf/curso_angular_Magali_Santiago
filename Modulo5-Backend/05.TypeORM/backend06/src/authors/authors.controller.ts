import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './authors.model';

@Controller('authors')
export class AuthorsController {

    constructor(private authorService: AuthorsService) {}

    @Get()
    findAll(): Promise<Author[]> {
        return this.authorService.findAll();
    }

    /*
    Si cascade:true entonces el objeto location se crea automaticamente al crear el autor
            {
        "id": 0,
        "name": "otro auto5",
        "email": "a5@email.com",
        "bio": "hola",
        "location": {
            "id": 0,
            "street": "Calle prueba",
            "city": "Madrid",
            "postalCode": "28002",
            "country": "Spain"
        }
    }
    */
    @Post()
    async create(@Body() author: Author): Promise<Author> {
        return await this.authorService.create(author);
    }


}
