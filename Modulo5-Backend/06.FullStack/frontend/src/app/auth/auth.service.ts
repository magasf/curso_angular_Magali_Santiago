import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

export interface token{
  sub: number;//id del usuario
  email: string;
  role: string;
  exp: number;
  lat: number;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  url: string = "http://localhost:3000/auth";


  constructor(public httpClient: HttpClient,
              private router: Router) { }

  login(login: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, login);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/register`, user);
  }
  logout(){
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/auth/login']);
    //Se podria hacer una redireccion hacia login con router.navigate
  }
  isLoggedIn(){
    return localStorage.getItem('jwt_token')!== null;
  }
  isAdmin(){
    let token = localStorage.getItem('jwt_token') ?? '';
    try{
      let decoded_token = jwt_decode(token) as {role: string};
      return decoded_token.role ==='admin';
      
    } catch(error){
      console.log(error);

    }
    return false;
  }
}
