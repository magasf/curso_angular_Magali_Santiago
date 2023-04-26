// Opcional: convertir EventService en una interfaz
// y hacer dos clases que la implementen
// una clase hace las operaciones con un Array

import { IEvent } from "./event.model";

// otra clase hace las operaciones con un Set
export class EventService {
    private events: Array<IEvent> = [];
    private blackWords: string[] = ['prohibido1', 'prohibido2', 'prohibido3'];

    // devuelve todos los eventos
    public findAll(): Array<IEvent> {
        return new Array(...this.events); // devolver una copia del array events
    }
    // devuelve un evento filtrando por su id
    public findById(id: number): IEvent | undefined {
        return this.events.find(evento => evento.id === id); // find devuelve un objeto
    }
    public findAllByPriority(prioridad: string): Array<IEvent> {
        return this.events.filter(evento => evento.priority === prioridad); // filter devuelve un Array
    }
    public save(event: IEvent): IEvent {
        if (event.id!== -1)
            throw new Error("Para crear un nuevo evento no se añade id");

        // generar nuevo id y asignarlo al event que se quiere guardar 
        //Comprobar si existe otro evento con el mismo titulo, en ese caso lanzar error
        
        if(! this.isValid(event))//si el evento es incorredcto entonces no se guarda
         throw new Error("Datos Inconrrectos")
        
        event.id = this.generateNextId();
        
        // guardar
        this.events.push(event)
        return event;
    }
    update(event: IEvent): IEvent {

        if(!event.id)
            throw new Error("el id tiene que ser valido");

        let eventIndex = this.events.findIndex(currentEvent => currentEvent.id === event.id);
        
         if (eventIndex === -1)
             throw new Error("404 not found");
        
        if(this.isValid(event))
            this.events[eventIndex].title = event.title;

         
         this.events[eventIndex].priority = event.priority;
         this.events[eventIndex].fecha = event.fecha;
         this.events[eventIndex].description = event.description;
        
         return event;
    }
    public deleteById(id: number): Boolean{
        let eventIndex = this.events.findIndex(event => event.id === event.id)
        if (eventIndex === -1)
            throw new Error("404 not found");

        this.events.splice(eventIndex, 1);

        return this.events.splice(eventIndex, 1).length ===1;
    }
    private isValid(event: IEvent): boolean{

        //validacion1: title tenga longitud entre 10 y 50
        //if(event.title.length >= 10 && event.title.length <=50)
        //return true;
        if (event.title.length < 10 || event.title.length > 50)
            return false

        //validacion2: title no este ocupado ya
        
        for (const currentEvent of this.events) {
            if(currentEvent.title === event.title)
            return false;
                
        }

        //validacion3: title no contenga una palabra prohibida
        
        for (const word of this.blackWords) {
            if(event.title.includes(word))
            return false
        }
    

        
        return true; //todo OK
        
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