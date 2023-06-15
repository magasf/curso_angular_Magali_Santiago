import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { BookService } from './book/book.service';

@Module({
  imports: [BooksModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService, BookService],
})
export class AppModule {}
