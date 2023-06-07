import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = "http://localhost:3000/categories";

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.url);
  }

  findById(id: number): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`${this.url}/${id}`);
  }

  create(author :ICategory): Observable<ICategory> {
    return this.httpClient.post<ICategory>(this.url, author);
  }

  update(author: ICategory): Observable<ICategory> {
    return this.httpClient.put<ICategory>(`${this.url}/${author.id}`, author);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
