import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url: string = "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<any> {
   return this.httpClient.get(this.url);

  } 
  findById(id: number): Observable<any>{
    return this.httpClient.get(`${this.url}/${id}`);
    
  }
}
