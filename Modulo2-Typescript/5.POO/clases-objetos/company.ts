class Company{

    //Consrtuctor: se puede dividir en varias lineas para mejorar la legibilidad
    constructor(public id: number, public cif: string, public legalName: string, public income: number, public outcome: number){

    }
    //Metodos
    getFullName(): string{
        return `${this.cif} ${this.legalName}`;
    }
    getNetIncome(): Number{
        return this.income - this.outcome;
    }
}
let company1 = new Company(1, "855674342", `DESARROLLOS COSMICOS SL`, 500000, 250000);
console.log(company1.getFullName());
console.log(company1.getNetIncome());
// como los atributos son public se pueden acceder directamente 
console.log(company1.outcome);
console.log(company1.income);
company1.legalName = "OTRA EMPRESA SL";
console.log(company1.legalName);