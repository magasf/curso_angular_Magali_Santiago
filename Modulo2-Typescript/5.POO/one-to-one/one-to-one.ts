import { IAddress } from "./adress.model";
import { IUser } from "./user.model";


let address1: IAddress = {
    id: 1,
    street: "Calle falsa 123",
    postalCode: "33034",
    city: "Gijon",
    country: "Spain"
}
let address2: IAddress = {
    id: 2,
    street: "Calle verdadera 123",
    postalCode: "55067",
    city: "Toledo",
    country: "Spain"
}

let user1: IUser = {
    id: 1,
    email: "algo@algo.com",
    birthday: new Date(2001, 1, 1),
    phone: "6543211234",
    address: address1//ONE TO ONE
}

console.log(`usuario ${user1.email} vive en ${user1.address.city} de ${user1.address.country}`);
//El usuario se cambia de casa
user1.address= address2;

console.log(`usuario ${user1.email} vive en ${user1.address.city} de ${user1.address.country}`);

//Crear objeto address y user a la vez en la propia creacion del usuario
let user2: IUser ={
    id: 2,
    email: "esmunmail@algo.com",
    birthday: new Date(1997, 4, 3),
    phone: "62379923",
    address: {
        id: 3,
        street: "Calle unLugar 123",
        postalCode: "33024",
        city: "Fuenlabrada",
        country: "Spain"
    }
}
console.log(user2);