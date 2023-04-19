

// Paso 1: Crear una clase Activity

class Activity {

    constructor(id, title, content, status, importance, date) { 
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.importance = importance;
        this.date = date;
    }
}

// Paso 2: Crear una clase con métodos para trabajar con objetos Activity
/*
Crear una clase que represente un servicio de tareas que tenga como atributo una estructura de
datos de tareas y métodos para gestionar las tareas:
• Añadir una nueva tarea OK
• Devolver todas las tareas OK
* Devolver tarea por id OK
• Devolver todas las tareas filtrando por estado OK
• Devolver todas las tareas filtrando por prioridad OK
• Actualizar una tarea
• Eliminar una tarea
*/
class ActivityDatabase {

    constructor() {
        this.activities = [];
    }

    addActivity(activity) {
        /*
        Para simular una base de datos, generamos un id (1, 2, 3, ...) único para cada Activity
        con un bucle for o con la clase Math calcular el id más alto de todos los ids 
        */
        activity.id = this.#generateNextId2();
        this.activities.push(activity);
        return activity;
    }
    #generateNextId() {
        let maxId = 0;
        for (const currentActivity of this.activities) {
            if (currentActivity.id > maxId)
                maxId = currentActivity.id;
        }
        return ++maxId;
    }
    #generateNextId2() {

        if (this.activities.length === 0)
            return 1;

        // utilizar el método map() para obtener un array de ids
        let ids = this.activities.map( activity => activity.id );
        console.log(ids);

        // Obtener el id máximo utilizando Math.max()
        let maxId = Math.max(...ids);
        return ++maxId;

    }

    findAll() {
        return this.activities;
    }

    filterById(id) {  // filtrar por ID filterById(1)
        return this.activities.filter(activity => activity.id === id);
    }

    filterByStatus(status) { //devuelve una estructura de datos filterByStatus("En progreso");
        return this.activities.filter(activity => activity.status === status);
    }

    filterByTitle(title) { // filterByTitle("Reunión");
        return this.activities.filter(activity => activity.title.includes(title));
    }

    // modifica un objeto activity que ya existe en el array de activities
    update(activity) {

        let activityIndex = this.activities.findIndex(
            currentActivity => currentActivity.id === activity.id
        );

        this.activities[activityIndex].title = activity.title;
        this.activities[activityIndex].status = activity.status;
    }

    deleteById(id) {

        let activityIndex = this.activities.findIndex(activity => activity.id === id);

        this.activities.splice(activityIndex, 1);
    }

}

// Paso 3: crear objetos y probar los métodos CRUD para simular una base de datos
let activityDatabase = new ActivityDatabase();
let reunionTrabajo = new Activity(
    undefined, 
    "Reunión JavaScript", 
    "tratar caso práctico", 
    "En progreso",
    "Media",
    new Date("2023-04-18")
    );
let running = new Activity(
    undefined,
    "Entrenamiento cardiovascular",
    "Correr 5 KM", 
    "Pendiente",
    "Normal",
    new Date("2023-04-15")
);
let gym = new Activity(
    undefined,
    "Entrenamiento musculación",
    "Press banca", 
    "Pendiente",
    "Normal",
    new Date("2023-04-14")
);
reunionTrabajo = activityDatabase.addActivity(reunionTrabajo); // id 1
console.log(reunionTrabajo.id);

running = activityDatabase.addActivity(running); // id 2
console.log(running.id);

gym = activityDatabase.addActivity(gym); // id 3
console.log(gym.id);


let activity1 = activityDatabase.filterById(1);
let activity2 = activityDatabase.filterById(2);
let activitiesByStatus = activityDatabase.filterByStatus("Pendiente");
let activitiesByTitle = activityDatabase.filterByTitle("Entrenamiento");

activityDatabase.deleteById(2);




 // ======================================= ACTUALIZAR ==============================

console.log(activityDatabase.filterById(1));

let activity1Edited = new Activity(1, "modificado", undefined, "rechazado", undefined, undefined)
activityDatabase.update(activity1Edited);

console.log(activityDatabase.filterById(1));