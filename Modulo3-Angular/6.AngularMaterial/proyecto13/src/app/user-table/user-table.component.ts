import { Component } from '@angular/core';
import { IUser } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  displayedColumns: string[] = ['avatar','fullName', 'email', 'actions'];
  users: IUser[] = [
    {
      fullName: "Juan Garcia",
      email: "usuario1@gmail.com",
      bio: "Lorem ipsum dolor asit amet ipsum",
      avatar: "https://ui-avatars.com/api/?name=Juan+Garcia"
    },
    {
      fullName: "Patricia Martinez",
      email: "usuario2@gmail.com",
      bio: "Lorem ipsum dolor asit amet ipsum",
      avatar: "https://ui-avatars.com/api/?name=Patricia+Martinez"
    },
    {
      fullName: "Antonio Rataplan",
      email: "usuario3@gmail.com",
      bio: "Lorem ipsum dolor asit amet ipsum",
      avatar: "https://ui-avatars.com/api/?name=Antonio+Rataplan"
    },
    {
      fullName: "Lucía Zamora",
      email: "usuario4@gmail.com",
      bio: "Lorem ipsum dolor asit amet ipsum",
      avatar: "/assets/img/user-avatar1.png"
    },
    {
      fullName: "Paco Mer",
      email: "usuario5@gmail.com",
      bio: "Lorem ipsum dolor asit amet ipsum",
      avatar: "/assets/img/user-avatar2.png"
    },
  ];
  //constructor(private router: Router){}
  view(user: IUser): void{
    //this.rrouter.navigate
    console.log(user);
  }
  edit(user: IUser): void{
    //this.rrouter.navigate
    console.log(user);
  }
  deleteUser(user: IUser): void{
    //this.rrouter.navigate
    console.log(user);
  }
  create(): void{}
  deleteAll(): void{

  }


}
