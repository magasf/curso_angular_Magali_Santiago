import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user: IUser= {
    id: 1,
    fullName: 'Pepito Perez'
  }
}
