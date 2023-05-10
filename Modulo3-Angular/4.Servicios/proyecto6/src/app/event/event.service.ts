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
  //findAllByCompletedTrue()
  //Con 1 parametro: ?completed=true
  //Con 1 parametro: ?param1=value&param2=value2
  findAllByCompletedTrue(): Observable<any>{
    return this.httpClient.get(`${this.url}?completed=true`);
  }
  findAllCompletedFalse(): Observable<any>{
    return this.httpClient.get(`${this.url}?completed=false`);
  }
    //save
    //update
    //deleteById
  
}
