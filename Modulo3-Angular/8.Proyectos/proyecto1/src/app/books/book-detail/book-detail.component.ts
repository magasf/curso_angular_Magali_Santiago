import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';
import { IAuthor } from 'src/app/authors/models/author.model';
import { AuthorService } from 'src/app/authors/services/author.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: IBook | undefined;
  author: IAuthor | undefined;
  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private authorService: AuthorService){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      const id = parseInt(params['id'], 10);
      this.bookService.findById(id).subscribe(data => {
        this.book = data
        if(!(this.book.authorId > 0)) return;
        
        this.authorService.findById(this.book.authorId).subscribe(data => this.author = data)

      });
    });

  }        
}
