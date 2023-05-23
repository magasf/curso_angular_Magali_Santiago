import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url: string = "https://jsonplaceholder.typicode.com/comments";

  constructor() { }
}
