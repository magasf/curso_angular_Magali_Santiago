import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserDetailComponent,
    UserFormComponent
  ]
})

export class UsersModule { }
