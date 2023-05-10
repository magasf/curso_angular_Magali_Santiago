import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: IEvent[] = [];

  constructor(private eventService: EventService){  }
  ngOnInit(): void {
    this.findAllTasks();
   
  }
  findAllByCompletedTrue(): void {
    this.eventService.findAllByCompletedTrue().subscribe(data => this.events = data);
  }
  findAllByCompletedFalse(): void{
    this.eventService.findAllCompletedFalse().subscribe(data => this.events = data);
  }
   findAllTasks(): void {
     this.eventService.findAll().subscribe(data => this.events = data);
   }
}
