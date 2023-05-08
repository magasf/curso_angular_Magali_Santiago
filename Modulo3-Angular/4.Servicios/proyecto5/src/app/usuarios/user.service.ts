import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = []

  constructor() { }
  save(user: IUser): void {
    this.users.push(user);

  }
  findByEmail(email: string): IUser | undefined{
    return this.users.find(user => user.email === email);
    
  }
}
