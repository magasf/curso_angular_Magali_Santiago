import { Controller, Get } from '@nestjs/common';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoryService: CategoriesService) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

}
