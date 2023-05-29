import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrls: ['./user-form-validation.component.css']
})
export class UserFormValidationComponent {
  
  userForm = new FormGroup({
    fullName: new FormControl('',[Validators.required, this.notWhiteSpacesValidator]),
    email: new FormControl('', [Validators.required ,Validators.email]),
    nickName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    salary: new FormControl(null, [Validators.required, Validators.min(16500), Validators.max(100000)] ),
    nif: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]$')]),
    phone: new FormControl('', [Validators.pattern('^[679]{1}[0-9]{8}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')])
    //pattern: nif, username, numero de telefono
    //Validator personalizado
    //Validator confirmar contraseña
  },{validators: this.passwordConfirmValidator} );

  //Validador personalizado a nivel de FormGroup: dos campos distintos
  passwordConfirmValidator(control: AbstractControl){
    if(control.get('password')?.value === control.get('passwordConfirm')?.value)
      return {'confirm': true}
      else
        return null;
    
  }
  //Validador personalizado a nivel de FormControl: si hay espacios mostrara error 

  notWhiteSpacesValidator(control: AbstractControl){
    
    let containSpaces = (control.value || '').includes(' ');
    if(containSpaces)
      return null;
    else
      return {'whitespace': true}
  }
  save(): void {
    if(this.userForm.valid) {
      console.log("Formulario correcto");
    } else {
      console.log("Formulario incorrecto, tiene errores de validacion");
    }
    console.log(this.userForm.get('fullName'));
  }
  


}
