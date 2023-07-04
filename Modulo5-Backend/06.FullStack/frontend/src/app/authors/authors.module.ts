import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthorDetailComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class AuthorsModule { }
