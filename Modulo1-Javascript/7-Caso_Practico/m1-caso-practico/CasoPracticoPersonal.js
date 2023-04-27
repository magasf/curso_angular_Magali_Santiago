/**
 * Agregar comentarios minimos para seccionar el codigo y tener mejor entendimiento
 */

class Task {
    constructor(id, title, description, status, priority, date){
        this.id = id,
        this.title = title,
        this.description = description,
        this.status = status,
        this.priority = priority
        this.date = Date

    }
}
class TaskService{
    constructor(){
        this.tasks = [];
    }

    addTask(mission){
        mission.id = this.#generateNextId();
        this.tasks.push(mission);
        return mission;
    }
    #generateNextId(){
        if(this.tasks.length === 0)
            return 1;
        
        let ids = this.tasks.map(mission => mission.id);

        let maxID = Math.max(...ids);
        return ++maxID
    }

    findAll(){
        return this.tasks
    }

    filterById(id){
        let idResults = this.tasks.filter(mission => mission.id === id);
        if(idResults.length === 1)
            return idResults[0];
    }
    filterByTitle(title){
        return this.tasks.filter(mission => mission.title.includes(title));
    }
    filterByStatus(status){
        return this.tasks.filter(mission => mission.status === status);
    }

}
