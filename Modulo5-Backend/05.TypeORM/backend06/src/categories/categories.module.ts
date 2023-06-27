import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories.model';

@Module({

  imports:[TypeOrmModule.forFeature([Category])],//Tabla Author 
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
