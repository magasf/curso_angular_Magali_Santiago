
//Paso 1: Crear una clase Activity
class Activity {
    constructor(id, title, content, status, priority, date){
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.priority = priority;
        this.date = date;
    }


}


//Paso 2: Crear una clase con metodos para trabajar con objetos Activity
/**
 * Crear una clase que represente un servicio de tareas que tenga como atributo una estructura de
    datos de tareas y métodos para gestionar las tareas:
    • Añadir una nueva tarea
    • Devolver todas las tareas
    • Devolver todas las tareas filtrando por estado
    • Devolver todas las tareas filtrando por prioridad
    • Actualizar una tarea
    • Eliminar una tarea
 */
class ActivityDatabase {
    constructor(){
        this.activities = [];

    }
    addActivity(activity){
        /**
         * Para simular una base de datos, generamos un id(1, 2,3,...) unico para cada Activity
         * con un bucle for o con la clase Math calcular el id mas alto de todos
         */
        activity.id = this.#generateNextId2();
        this.activities.push(activity);
        return activity;
    }
    #generateNextId(){

        let maxId = 0
        for (const currentActivity of this.activities) {  
            if (currentActivity.id > maxId )
                maxId = currentActivity.id;    
        }
        return ++maxId;
    }    

    #generateNextId2(){
        if (this.activities.length === 0) 
            return 1;
             
        //Utilizar el metodo map() para obtener un array de ids
        let ids = this.activities.map( activity => activity.id); 
        console.log(ids);
    
        //obtener el id maximo ultilizando Math.max()
        let maxId = Math.max(...ids);
        return ++maxId;
    }
}


//Paso 3; crear objetos y probar los metodos CRUD para simular una base de datos
let activityDatabase = new ActivityDatabase();
let reunionTrabajo = new Activity(
    undefined, 
    "Reunion JS", 
    "Tratrar caso practico", 
    "En progreso",
    "Media",
    new Date("2023-04-18")
    );
let running = new ActivityDatabase(
    undefined,
    "Entrenamiento de maraton",
    "Correr 25km",
    "Terminado",
    "Normal",
    new Date("2023-04-15")
);
let gym = new ActivityDatabase(
    undefined,
    "Entrenamiento musculacion",
    "press banca",
    "Pendiente",
    "Normal",
    new Date("2023-04-14")
);

reunionTrabajo = activityDatabase.addActivity(reunionTrabajo); // id 1
console.log(reunionTrabajo.id)

running = activityDatabase.addActivity(running); // id 2
console.log(running.id)

gym = activityDatabase.addActivity(gym); // id 3
console.log(gym.id)
//let ids = [1,2,5,8,4]
//let maxnumber = Math.max(...ids);
//console.log(maxNumber);
