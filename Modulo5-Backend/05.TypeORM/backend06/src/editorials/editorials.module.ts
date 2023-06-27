import { Module } from '@nestjs/common';
import { EditorialsController } from './editorials.controller';
import { EditorialsService } from './editorials.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editorial } from './editorials.model';

@Module({
  imports: [TypeOrmModule.forFeature([Editorial])],
  controllers: [EditorialsController],
  providers: [EditorialsService]
})
export class EditorialsModule {}
