import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface ICompany {
  id: number;
  name: string;
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  hobbies: string[] = ['sports', 'music', 'travel'];
  companies: ICompany[] = [
    {id: 1, name: "company1"},
    {id: 2, name: "company2"},
    {id: 3, name: "company3"},
    {id: 4, name: "company4"},
  ];

  hide = true;

  minBirthday = new Date(1910, 0, 1); // enero empieza en 0
  maxBirthday = new Date(2005, 0, 1);

  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required, Validators.maxLength(256)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    isStudent: new FormControl(false),
    acceptConditions: new FormControl(false, [Validators.requiredTrue]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    salary: new FormControl(null, [Validators.min(16500), Validators.max(100000)]),
    department: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    hobbies: new FormControl([]),
    city: new FormControl(''),
    postalCode: new FormControl('', [Validators.pattern('^[0-9]{5}$')]),
    birthday: new FormControl(null),
    jobStartDate: new FormControl(null),
    jobEndDate: new FormControl(null)
    // Stepper
    // chips
    // autocomplete
    // Slide toggle
    // Slider
  });

  save(): void {

  }
}
