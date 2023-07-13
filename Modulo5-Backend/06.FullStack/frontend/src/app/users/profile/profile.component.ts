import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser | undefined;
  userForm = new FormGroup({
    id: new FormControl<number>(0),
    username: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    email: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.findCurrentUser()
                    .subscribe(data => {
                      this.user = data;
                      this.userForm.reset({
                        id: this.user.id,
                        username: this.user.username,
                        email: this.user.email
                      });
                    });
  }

  save(): void {
    let id = this.userForm.get('id')?.value ?? 0;
    let username = this.userForm.get('username')?.value ?? '';
    let email = this.userForm.get('email')?.value ?? '';

    let user: IUser = {
      id: id,
      username: username,
      email: email
    }

    this.userService.update(user)
    .subscribe(data => console.log('usuario actualizado'));


  }



}