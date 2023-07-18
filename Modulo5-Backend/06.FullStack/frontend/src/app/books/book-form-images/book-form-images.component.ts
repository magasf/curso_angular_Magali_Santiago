import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-book-form-images',
  templateUrl: './book-form-images.component.html',
  styleUrls: ['./book-form-images.component.css']
})
export class BookFormImagesComponent implements OnInit {

  book: IBook | undefined;
  imagePreviews: string[] = [];
  imageFiles: File[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private httpClient: HttpClient
    ) {}

  ngOnInit(): void {
    this.loadBook();
  }
  loadBook() {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.bookService.findById(id)
                    .subscribe(data => {
        this.book = data;
      });
    });
  }
  onFileSelected(event: Event) {
    let target = event.target as HTMLInputElement;
    if (target.files === null) return;

    for(let i = 0; i < target.files.length; i++) {
      this.imageFiles.push(target.files[i]);
      let reader = new FileReader();
      reader.onload = ev => this.imagePreviews.push(reader.result as string);
      reader.readAsDataURL(target.files[i]);
    }
  }

  save() {
    if(this.imageFiles.length === 0) return;

    // Cargar las imágenes en un objeto FormData
    let formData = new FormData();
    this.imageFiles.forEach(file => {
      formData.append('file', file); // file0, file1, file2....
    });

    // http://localhost:3000/books/2/images
    this.httpClient
      .post(`${BASE_URL}/books/${this.book?.id}/images`, formData)
      .subscribe(data => {
        console.log(data);
        this.loadBook();
        this.imageFiles = [];
        this.imagePreviews = [];
      });

  }


}
