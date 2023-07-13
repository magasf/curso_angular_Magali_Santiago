import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../models/book.model';
import { BASE_URL } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: string = `${BASE_URL}/books`;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.url);
  }

  findAllWithRelations(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.url}/load-relations`);
  }

  findAllByAuthorId(authorId: number): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.url}/author/${authorId}`);
  }

  findAllByCategoryId(categoryId: number): Observable<IBook[]>{
    return this.httpClient.get<IBook[]>(`${this.url}?categories_like=${categoryId}`);
  }

  findById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(`${this.url}/id/${id}`);
  }

  create(book :IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(this.url, book);
  }

  update(book: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(`${this.url}`, book);
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
