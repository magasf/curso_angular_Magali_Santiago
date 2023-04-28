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
class TasksDatabase{
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

    update(mission){
        let taskIndex = this.tasks.findIndex(
            currentTask => currentTask.id === mission.id
        );
        if(taskIdex === -1)
            return undefined;
        
        let updateTask = {...this.tasks[taskIndex], ...mission};

        this.tasks[taskIndex] = updateTask;
    }

    deleteById(id){
        let taskIndex = this.tasks.findIndex(mission => mission.id === id);

        if(taskIndex === -1)
        return;

        this.tasks.splice(taskIndex, 1);
    }
    deleteAll() {
        this.tasks = [];
    }

    count() {
        return this.tasks.length;
    }

}

let tasksDatabase = new TasksDatabase();


let lavarRopa = new Task(undefined,"Lavar ropa", "Ropa negra y ropa de trabajo", "Pending","Low", new Date("2023-04-20"));
let comidaSemanal = new Task(undefined,"Comida semanal", "Dieta balanceada de proteinas, verduras y frutas", "Complete","Middle", new Date("2023-03-11"));
let medico = new Task(undefined,"Cita medica", "Ginecologo, chequeo anual", "in progress","Middle", new Date("2023-04-25"));

lavarRopa = tasksDatabase.addTask(lavarRopa);