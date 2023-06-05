import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string = "http://localhost:3000/books";

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.url);
  }

  findById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(`${this.url}/${id}`);
  }

  create(book :IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(this.url, book);
  }

  update(book: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(`${this.url}/${book.id}`, book);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
