import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { UserDirComponent } from './user-dir/user-dir.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PeriodicElementsComponent } from './periodic-elements/periodic-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDirComponent,
    UserDetailComponent,
    PeriodicElementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
