import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
/**

 * 2- En HTML agregar un nuevo matformfield disabled que muestre id pero no lo edite
 * 3- En save hacer la distincion de guardar o editar
 * 4- En loadForm hay que cargar el id
 */
export class BookFormComponent implements OnInit {

  bookForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    sinopsis: new FormControl('', [Validators.maxLength(1000)]),
    numPages: new FormControl(0, [Validators.min(30)]),
    price: new FormControl(0, [
      Validators.required, Validators.min(5), Validators.max(500), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")
    ]),
    release: new FormControl(new Date()),
    // photo: new FormControl(''),
    // authorId: new FormControl(null, [Validators.required])

  });

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['id'];
      if (!idString) return;

      const id = parseInt(idString, 10);
      this.bookService.findById(id).subscribe(book => this.loadBookForm(book));
    });
  }

  loadBookForm(book: IBook): void {

    this.bookForm.reset({
      title: book.title,
      sinopsis: book.sinopsis,
      numPages: book.numPages,
      price: book.price,
      release: book.release
    });
  }

  save(): void {
    let title = this.bookForm.get('title')?.value ?? '';
    let sinopsis = this.bookForm.get('sinopsis')?.value ?? '';
    let numPages = this.bookForm.get('numPages')?.value ?? 30;
    let price = this.bookForm.get('price')?.value ?? 5;
    let release = this.bookForm.get('release')?.value ?? new Date();
    let photo = "http://dummyimage.com/217x100.png/cc0000/ffffff";

    // TODO añadir validación extra de datos, si alguno está mal hacer return y mostrar error y no guardar.

    let book: IBook = {
      id: 0,
      title: title,
      sinopsis: sinopsis,
      release: release,
      numPages: numPages,
      photo: photo,
      price: price,
      authorId: 0
    }

    this.bookService.create(book).subscribe(book => this.router.navigate(['/books', book.id]));
  }

}
