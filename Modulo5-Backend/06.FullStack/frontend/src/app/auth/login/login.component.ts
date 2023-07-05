import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService){}
  save(){
    
    let login ={
      email: this.userForm.get('email')?.value ?? '',
      password: this.userForm.get('password')?.value ?? ''

    }
    this.authService.login(login).subscribe(data => console.log(data))
  }

}
