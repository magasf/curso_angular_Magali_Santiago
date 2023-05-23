import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
