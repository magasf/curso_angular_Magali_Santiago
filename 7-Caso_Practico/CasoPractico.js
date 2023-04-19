
/*

CASO PRACTICO INDIVIDUAL

1. Crear clase Tarea: constructor con atributos
2. Crear clase TareaService o TareaDatabase que es una clase con métodos para simular una base de datos, dentro tiene
un array de Tareas
3. Crear objetos de ambas clases y probar el programa

*/
// Paso 1: Crear una clase Activity

class Activity {

    constructor(id, title, content, status, importance, date) { 
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.importance = importance;
        this.date = date; // campo tipo fecha Date
    }
}

// Paso 2: Crear una clase base de datos con métodos para trabajar con objetos Activity
/*
Crear una clase que represente un servicio de tareas que tenga como atributo una estructura de
datos de tareas y métodos para gestionar las tareas:

    Operaciones CRUD: Create, Retrieve, Update, Delete
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
        this.activities = []; // inicializar la base de datos
    }

    /**
     * Añade una nueva actividad en el array de actividades en consecuencia el array crece
     * Para cada nueva actividad que se quiere añadir, genera un nuevo id que esté libre
     * Para simular una base de datos, generamos un id (1, 2, 3, ...) único para cada Activity
        con un bucle for o con la clase Math calcular el id más alto de todos los ids 
     * @param {*} activity objeto de la clase Activity
     * @returns devuelve la actividad con un nuevo id asignado
     */
    addActivity(activity) {
        activity.id = this.#generateNextId2(); // asigna el nuevo id calculado en el objeto activity antes de guardarlo en el array
        this.activities.push(activity);
        return activity;
    }

    /**
     * Primero calcula cuál es el id (int) más alto de todos los ids pertenecientes 
     * a los objetos actividad del array activities. 
     * Una vez que obtiene el id máximo en la variable maxId entonces lo incrementa porque esa será el siguiente nuevo id
     * 
     * Utiliza for y if 
     * @returns 
     */
    #generateNextId() {
        let maxId = 0;
        for (const currentActivity of this.activities) {
            if (currentActivity.id > maxId)
                maxId = currentActivity.id;
        }
        return ++maxId; // operador incremento ++ va la izquierda: primero asigna y luego hace el return
    }

    /**
     * Primero calcula cuál es el id (int) más alto de todos los ids pertenecientes 
     * a los objetos actividad del array activities. 
     * Una vez que obtiene el id máximo en la variable maxId entonces lo incrementa porque esa será el siguiente nuevo id
     * 
     * Utiliza map y Math.max
     * @returns 
     */
    #generateNextId2() {

        if (this.activities.length === 0)
            return 1;

        // utilizar el método map() para obtener un array de ids. Utilizamos map para extraer el id de cada activity
        let ids = this.activities.map( activity => activity.id );

        // Obtener el id máximo utilizando Math.max()
        let maxId = Math.max(...ids); // se utiliza el operador ... para desglosar el array en elementos
        return ++maxId;

    }

    /**
     * Devuelve el array de actividades. SELECT * FROM activities
     * @returns 
     */
    findAll() {
        return this.activities;
    }

    /**
     * Devuelve un objeto activity. SELECT * FROM activities WHERE id = X
     * @param {*} id numero id de la actividad a buscar
     * @returns el objeto actividad si existe o undefined si no se encuentra
     */
    filterById(id) {  // filtrar por ID filterById(1)
        let results = this.activities.filter(activity => activity.id === id);
        if (results.length === 1)
            return results[0];
    }

    /**
     * Devuelve un array de activities con el estado solicitado por parámetro
     * @param {*} status un string que representa un estado de tarea: "EN PROGRESO", "TERMINADO"
     * @returns array de actividades o un array vacío
     */
    filterByStatus(status) { //devuelve una estructura de datos filterByStatus("En progreso");
        return this.activities.filter(activity => activity.status === status);
    }

    /**
     * Devuelve un array de actividades filtrando por el título, no es coincidencia estricta o exacta, se busca que contenga
     * @param {*} title palabras a buscar en el título del activity
     * @returns array de actividades o un array vacío
     */
    filterByTitle(title) { 
        return this.activities.filter(activity => activity.title.includes(title));
        // return this.activities.filter(activity => activity.title === title);
    }

    
    /**
     * Actualiza un objeto activity existente en el array de activities
     * @param {*} activity a actualizar con el id correcto y los atributos editados
     * @returns objeto activity actualizado o undefined si no lo encuentra
     */
    update(activity) {

        let activityIndex = this.activities.findIndex(
            currentActivity => currentActivity.id === activity.id
        );
        if (activityIndex === -1)
            return undefined;

        this.activities[activityIndex].title = activity.title;
        this.activities[activityIndex].status = activity.status;
        return activity;
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





activityDatabase.deleteById(2);






 // ======================================= BUSCAR UNO: filterById ==============================

console.log(activityDatabase.filterById(1));
console.log(activityDatabase.filterById(999));



 // ======================================= BUSCAR POR STATUS: filterByStatus ==============================

 console.log(activityDatabase.filterByStatus("Pendiente"));
 console.log(activityDatabase.filterByStatus("No existe"));



 // ======================================= BUSCAR POR TITULO: filterByTitle ==============================

 console.log(activityDatabase.filterByTitle("Entrenamiento"));
 console.log(activityDatabase.filterByTitle("No existe"));


 
 // ======================================= ACTUALIZAR: upate ==============================

console.log(activityDatabase.filterById(1));

let activity1Edited = new Activity(1, "modificado", undefined, "rechazado", undefined, undefined)
activityDatabase.update(activity1Edited);

console.log(activityDatabase.filterById(1));

let act999 = new Activity(999, "modificado", undefined, "rechazado", undefined, undefined)
console.log(activityDatabase.update(act999)); // undefined
