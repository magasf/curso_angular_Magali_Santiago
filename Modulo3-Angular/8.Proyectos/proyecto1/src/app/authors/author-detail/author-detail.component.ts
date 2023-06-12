import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { BookService } from 'src/app/books/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { IAuthor } from '../models/author.model';
import { IBook } from 'src/app/books/models/book.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  author: IAuthor | undefined;
  books: IBook[] = [];

  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit AuthorDetailComponent');
    this.activatedRoute.params.subscribe((params) => {
      const id = parseInt(params['id'], 10);

      this.authorService.findById(id).subscribe((data) => {
        this.author = data;
      });

      this.bookService.findAllByAuthorId(id).subscribe((data) => {
        this.books = data;
      });
    });
  }
}
