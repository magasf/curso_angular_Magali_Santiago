import { IEvent } from "./event.model";
import { EventService } from "./event.service";

const eventService = new EventService();

//Agenda vacia[]
console.log(eventService.findAll());

let event1: IEvent = {
    id: -1,// -1 porque es obligatorio y el id se autogenera en save()
    title: "Evento 1 para el miercoles 26",
    priority: "BAJA",
    fecha: new Date(),
    description: "Lorem ipsum dolor"
}
console.log(eventService.save(event1));
