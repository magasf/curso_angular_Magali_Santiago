const person = {
    firstName: 'John Doe',
    age: 30,
    // composición
    address: {
        city: 'New York',
        country: 'USA'
    }
};

console.log(person.address.city);

let { firstName, age } = person;
let { address : {city} } = person;

console.log(age);
console.log(city);

