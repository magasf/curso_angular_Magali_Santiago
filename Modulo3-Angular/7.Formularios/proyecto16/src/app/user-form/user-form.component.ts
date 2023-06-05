import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


interface ICompany{
  id: number;
  name: string;
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  companies: ICompany[]=[
    {id: 1, name: "comapny1"},
    {id: 2, name: "comapny2"},
    {id: 3, name: "comapny3"},
    {id: 4, name: "comapny4"}

  ];
  hide = true;
  userForm = new FormGroup({

    fullName: new FormControl('',[Validators.required]),
    bio: new FormControl('', [Validators.required, Validators.maxLength(256)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    isStudent: new FormControl(false),
    acceptConditions: new FormControl(false, [Validators.requiredTrue]),
    password: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z0-9]{8,20}$')]),
    salary: new FormControl(null,[Validators.min(16500), Validators.max(100000)]),
    department: new FormControl('',[Validators.requiredTrue]),
    company: new FormControl('',[Validators.required]),
    hobbies: new FormControl([])
    //varios campos en la misma linea
    //Datepicker

    //stepper
    //chips
    //autocomplete
    //slide toggle
    //slider

  });

  save(): void {
    console.log(this.userForm)

  }

  

}
