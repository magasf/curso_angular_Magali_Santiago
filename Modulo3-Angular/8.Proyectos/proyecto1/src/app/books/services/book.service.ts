import { HttpClient, HttpResponse } from '@angular/common/http';
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

  // http://localhost:3000/books?authorId=1
  findAllByAuthorId(authorId: number): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.url}?authorId=${authorId}`);
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

  // Opción 1
  // deleteById(id: number): Observable<{}> {
  //  return this.httpClient.delete(`${this.url}/${id}`);
  // }

  // Opción 2:
  httpOptions = {
    observe: 'response' as 'body'
  }
  deleteById(id: number): Observable<HttpResponse<{}>> {
    return this.httpClient.delete<HttpResponse<{}>>(`${this.url}/${id}`, this.httpOptions);
  }
}
