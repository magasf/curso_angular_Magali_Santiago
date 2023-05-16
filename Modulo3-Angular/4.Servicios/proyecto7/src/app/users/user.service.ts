import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root' 
})
export class UserService {
  url: string = "https://jsonplaceholder.typicode.com/users"
  httpOptions = {
    observe: 'response' as 'body'
  }

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<HttpResponse<IUser[]>> {
    return this.httpClient.get<HttpResponse<IUser[]>>(this.url, this.httpOptions);
  }
}
