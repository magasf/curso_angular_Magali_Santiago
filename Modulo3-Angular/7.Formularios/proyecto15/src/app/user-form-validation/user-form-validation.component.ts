import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrls: ['./user-form-validation.component.css']
})
export class UserFormValidationComponent {
  
  userForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required ,Validators.email]),
    nickName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    salary: new FormControl('', [Validators.required, Validators.min(16500), Validators.max(100000)] ),
    nif: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]$')])
    //pattern: nif, username, numero de telefono
    //Validator personalizado
    //Validator confirmar contraseña
  });

  save(): void {
    if(this.userForm.valid) {
      console.log("Formulario correcto");
    } else {
      console.log("Formulario incorrecto, tiene errores de validacion");
    }
    console.log(this.userForm.get('fullName'));
  }


}
