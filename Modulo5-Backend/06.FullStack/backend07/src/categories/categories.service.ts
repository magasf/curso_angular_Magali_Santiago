import { Injectable } from '@nestjs/common';
import { Category } from './categories.model';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(Category) 
        private categoryRepo: Repository<Category>
    ){}

    findAll(): Promise<Category[]> {
        return this.categoryRepo.find();
    }

    findAllByIds(ids: number[]): Promise<Category[]> {
        return this.categoryRepo.find({
            where: {
                id: In(ids)
            }
        });
    }


}
