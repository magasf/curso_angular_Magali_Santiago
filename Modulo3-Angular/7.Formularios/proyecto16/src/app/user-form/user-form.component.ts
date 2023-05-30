import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  hide = true;
  userForm = new FormGroup({

    fullName: new FormControl('',[Validators.required]),
    bio: new FormControl('', [Validators.required, Validators.maxLength(256)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    isStudent: new FormControl(false),
    acceptConditions: new FormControl(false, [Validators.requiredTrue]),
    password: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z0-9]{8,20}$')])
    //password con opcion de ver la contrasena
    //varios campos en la misma linea
    //formato nunmerico con prefijo
    //datepicker
    //stepper
    //radio
    //chips
    //select
    //autocomplete
    //slide toggle
    //slider

  });

  save(): void {
    console.log(this.userForm)

  }

  

}
