/**
 * Palabras reservadas para interfaces:
 * interface
 * implements
 */
interface ISaludo{
    saludar(): string;
    despedirse(firstName: string): string;

}

class SaludoFormal implements ISaludo{
    saludar(): string{
        return "Estimados, buenos dias"
    }
    despedirse(firstName: string): string{
        return `Hasta la proxima ${firstName}`;
    }
}

class SaludoInformal implements ISaludo{
    saludar(): string{
        return "Que pasa gente";
    }
    despedirse(firstName: string): string{
        return `Chao ${firstName}`
    }
}

let saludo1: ISaludo = new SaludoFormal();
let saludo2: ISaludo = new SaludoInformal();

console.log(saludo1.saludar());
console.log(saludo2.saludar());