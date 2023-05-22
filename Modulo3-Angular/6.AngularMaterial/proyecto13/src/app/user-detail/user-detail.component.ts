import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user: IUser = {
    fullName: "Lucía Zamora",
    email: "usuario4@gmail.com",
    bio: "Lorem ipsum dolor asit amet ipsum",
    avatar: "/assets/img/user-avatar1.png"
  };
  
}
