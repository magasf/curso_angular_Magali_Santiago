class Aula {
    constructor(private id: number, private capacidad: number, private ventilacion: boolean){}
    getCapacidad(){
        return this.capacidad;
    }
    setCapacidad(capacidad){
        this.capacidad = capacidad > 0 && capacidad <= 40 ? capacidad : this.capacidad;
    }
}
 const aulaCursoAngular = new Aula(1, 25, true);
 const aulaReuniones = new Aula(2, 3, false);
 const aulaAnalisisDatos = new Aula(3, 20, true);

 console.log(aulaCursoAngular);
 //NO SE PEDE ACCEDER DIRECTAMENTE A LAS PROPIEDADES PIVATE
 //console.log(aulaCursoAngular.id); 
 // aulaCursoAngular.capacidad = 80;

 //PRUEBA 1: CAMBIAR LA CAPACIDAD A UN VALOR PERMITIDO
 aulaCursoAngular.setCapacidad(35);//35
 console.log(aulaCursoAngular.getCapacidad());

 //PRUEBA 2: CAMBIAR CAPACIDAD A UN VALOR NO PERMITIDO
 aulaCursoAngular.setCapacidad(80);//35
 console.log(aulaCursoAngular.getCapacidad());


