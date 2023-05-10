import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventFormComponent } from './event-form/event-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventListComponent,
    EventDetailComponent,
    EventFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EventListComponent,
    EventDetailComponent,
    EventFormComponent

  ]
})
export class EventModule { }
