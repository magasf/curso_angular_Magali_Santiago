// Opcional: convertir EventService en una interfaz
// y hacer dos clases que la implementen
// una clase hace las operaciones con un Array

import { IEvent } from "./event.model";

// otra clase hace las operaciones con un Set
export class EventService {
    events: Array<IEvent> = [];

    // devuelve todos los eventos
    findAll(): Array<IEvent> {
        return new Array(...this.events); // devolver una copia del array events
    }
    // devuelve un evento filtrando por su id
    findById(id: number): IEvent | undefined {
        return this.events.find(evento => evento.id === id); // find devuelve un objeto
    }
    public findAllByPriority(prioridad: string): Array<IEvent> {
        return this.events.filter(evento => evento.priority === prioridad); // filter devuelve un Array
    }
    public save(event: IEvent): IEvent {
        if (event.id)
            throw new Error("Para crear un nuevo evento no se añade id");

        // generar nuevo id y asignarlo al event que se quiere guardar 
        //Comprobar si existe otro evento con el mismo titulo, en ese caso lanzar error
        event.id = this.generateNextId();
        
        // guardar
        this.events.push(event)
        return event;
    }
    private generateNextId(): number{
        let maxId = 0;
        for (const event of this.events) {
            if (event.id > maxId) 
                maxId = event.id;    
            
        }
        return ++maxId;
    }
}