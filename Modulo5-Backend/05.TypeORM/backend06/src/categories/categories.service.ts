import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './categories.model';
import { In, Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor( @InjectRepository(Category)
                private categoryRepo: Repository<Category>){}
    findAllByIds(ids: number[]): Promise<Category[]>{
        return this.categoryRepo.find({
            where: {

                id: In(ids)
            }
        })
    }
}
