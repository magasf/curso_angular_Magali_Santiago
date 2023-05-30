import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm = new FormGroup({

    fullName: new FormGroup('',[Validators.required])
  
  });

  Save(): void {

  }

  

}
