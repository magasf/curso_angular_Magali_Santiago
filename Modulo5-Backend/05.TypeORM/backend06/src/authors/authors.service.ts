import { ConflictException, Injectable } from '@nestjs/common';
import { Author } from './authors.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {


    constructor(
        @InjectRepository(Author) private authorRepo: Repository<Author>
    ){}

    findAll(): Promise<Author[]> {
        return this.authorRepo.find();
    }

    async create(author: Author): Promise<Author> {
        try {
            return await this.authorRepo.save(author);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('No se ha podido guardar el autor.');
        }
    }
}
