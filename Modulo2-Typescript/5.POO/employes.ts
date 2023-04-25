//Crear clase Employee con atributos: id firstname, salary, company
class Employee{

    //Atributos
    id: number;
    firstName: string;
    salary: number;
    company:string;
    
    //Constructor
    constructor(id: number,firstName: string, salary: number, company: string){
        this.id = id;
        this.firstName = firstName;
        this.salary = salary;
        this.company = company;
    }

    //Metodos
    saludar(): string{
        return `Hola mi nombre es ${this.firstName} y gano tanto ${this.salary}`;
    }
}

const employee1 = new Employee(1,"employee1",280000,"Deloitte");
console.log(employee1.salary);
console.log(employee1.saludar());