import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../models/book.model';
import { AuthorService } from 'src/app/authors/services/author.service';
import { IAuthor } from 'src/app/authors/models/author.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/categories/services/category.service';
import { ICategory } from 'src/app/categories/models/category.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'sinopsis',
    'release',
    'numPages',
    'price',
    'actions',
  ];
  books: IBook[] = [];
  authors: IAuthor[] = [];
  categories: ICategory[] = [];
  author: IAuthor | undefined;
  category: ICategory | undefined;
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.activatedRoute.params.subscribe((params) => {
      const authorIdStr = params['authorId'];
      const categoryIdStr = params['categoryId'];

      if (authorIdStr) { // Filtro por autores
        const id = parseInt(authorIdStr, 10);
        this.bookService.findAllByAuthorId(id).subscribe(data => this.books = data);
        this.authorService.findById(id).subscribe(data => this.author = data);

      } else if (categoryIdStr) { // Filtro por category
        const id = parseInt(categoryIdStr, 10);
        this.bookService.findAllByCategoryId(id).subscribe(data => this.books = data);
        this.categoryService.findById(id).subscribe(data => this.category = data);

      } else { // Sin filtro
        this.bookService.findAll().subscribe(data => this.books = data);
      }

    });
    this.authorService.findAll().subscribe(data => this.authors = data);
    this.categoryService.findAll().subscribe(data => this.categories = data);
  }

  deleteBook(book: IBook) {
    this.bookService.deleteById(book.id).subscribe({
      next: response => {
        if (response.status === 200 || response.status === 204) {
          console.log('Se ha borrado correctamente');
          this.loadBooks();
        } else {
          console.log('Se ha producido un error');
          this.snackbar.open('Se ha producido un error, inténtalo más tarde.', 'Cerrar', {duration: 3000});
        }
      },
      error: error => {
        console.log(error);
        this.snackbar.open('Se ha producido un error, inténtalo más tarde.', 'Cerrar', {duration: 3000});
      },
    });
  }
}
