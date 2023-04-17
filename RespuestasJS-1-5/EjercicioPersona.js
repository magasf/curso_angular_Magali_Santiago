//Ejemplo de clase con atributos encapsulados utilizando getter y setter
//S
class Persona{
    #edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.#edad = edad;
    }
    get edad(){
        return this.#edad;
    }
    set edad(nuevaEdad){ // se ultiliza para modificar un atributo privado
        if(nuevaEdad >= 18)
        
        this.#edad = nuevaEdad;
    }
    
}

let persona1 = new Persona("persona1", 20)

persona1.edad = 3;// asignacio directa, funciona si el atributo es publico
console.log(persona1.edad); //3
persona1.edad = 25;//Esta asignacion invoca al metodo set automaticamente
console.log(persona1.edad); // 25
