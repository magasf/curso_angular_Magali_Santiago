import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
//Componente que permite crear 
export class EventFormComponent implements OnInit {

  title: string = ""
  createEvent: IEvent | undefined;

  eventToUpdate: IEvent | undefined;
  titleToUpdate: string = "";

  constructor(private eventService: EventService){}
  //Se ejecuta siempre de forma automaticca al entrar
  ngOnInit(): void {
    //recuperar IEvent por id 1 
    this.eventService.findById(1).subscribe(data =>{

      this.eventToUpdate = data
      this.titleToUpdate = this.eventToUpdate.title;
    })

  }

  create(): void{
    let event: IEvent = {
      userId: 1,
      id: 0,
      title: this.title,
      completed: false
    }
    this.eventService.create(event).subscribe(data => this.createEvent = data)
    this.title = "";
  }
  update(): void{
    if (this.eventToUpdate) {
      this.eventToUpdate.title = this.titleToUpdate;
      this.eventService.update(this.eventToUpdate).subscribe(data => console.log(data));
    }

  }
}
