
/**
 * Clase Evento que tenga titulo, fecha, admin, lista de invitados
 */

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



class Event {
    constructor(title, date, adminUser){
        this.title = title;
        this.date = date;
        this.adminUser = adminUser;//objeto de la clase User
        this.users = [];// Lista de usuarios invitados
    }

    addUser(user){
        this.users.push(user);

    }
    addUsers(...users){
        this.users.push(users);
    }
}

let dateToday = new Date()
let event1 = new Event("Clase de JavaScript", dateToday, user1);

event1.addUser(user2);
event1.addUser(user3);

console.log(event1);
