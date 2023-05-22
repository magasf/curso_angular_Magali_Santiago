import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-dir',
  templateUrl: './user-dir.component.html',
  styleUrls: ['./user-dir.component.css']
})
export class UserDirComponent {

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
}
