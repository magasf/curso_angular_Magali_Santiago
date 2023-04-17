//Clase usuario


class User {
    constructor(firstName, email){
        this.firstName = firstName;
        this.email = email;
    }
}
let user1 = new User("Usuario1","usuario1@gmail.com")
let user2 = new User("Usuario2","usuario2@gmail.com")
let user3 = new User("Usuario3","usuario3@gmail.com")
let user4 = new User("Usuario4","usuario4@gmail.com")


/**
 * Clase Evento que tenga titulo, fecha, admin
 */
class Event {
    constructor(title, date, adminUser){
        this.title = title;
        this.date = date;
        this.adminUser = adminUser;


    }
}

//PASAR EL OBJETO USUARIO EN EL CONSTRUCTOR

let event1 = new Event("Reunion de desarrollo", new Date("2023-04-18"), user1)


console.log(event1.title);
console.log(event1.date);
console.log(event1.adminUser.email);//accede al email del usuario
console.log(event1.adminUser.firstName);//accede al nombre del usuario





/**
 * Aula con alumnos y ordenadores
 */