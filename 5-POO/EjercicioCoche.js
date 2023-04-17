
const MAX_SPEED = 120;
const MIN_SPEED = 0;
   class Vehiculo {
      constructor(fabricante, modelo, color, caballos){
         //estado de un objeto 


         this.fabricante = fabricante;
         this.modelo = modelo;
         this.color = color;
         this.caballos = caballos;
         this.estaEncendido = false; // el coche esta inicialmente apagado
         this.velocidad = 0; 

      }
      encender(){
         this.estaEncendido = true;
         console.log("El coche esta encendido");
      }
      apagar(){
         this.estaEncendido = false;
         this.velocidad = MIN_SPEED;
         console.log("El coche esta apagado");

      }
      acelerar(cantidad){
         if(this.estaEncendido === false)//Comprobar si esta encendido
            return;
   
         //1. que pasa si la cantidad a acelerar es negativa
         if (cantidad <= 0){
            return;// sale del metodo  

         } 
          //2. que pasa si la cantidad a acelerar hace que se supere el limite de 120km/h
          // en ese caso dejaremos 120, pero no debe sobrepasar ese limite          
         if(this.velocidad + cantidad >= MAX_SPEED){

            this.velocidad = MAX_SPEED;
            console.log("No puede superar la velocidad maxima")
            return this.velocidad;
         }
         
         this.velocidad += cantidad;//condiciones normales.
         
      }
      frenar(cantidad){
        
         if(this.velocidad - cantidad <= MIN_SPEED){
            this.velocidad = MIN_SPEED
            console.log("Usted a frenado por completo")
            return this.velocidad
         }
         this.velocidad -= cantidad;//condiciones normales.

      }
   }

   let vehiculo1 = new Vehiculo("Toyota","Prius", "rojo", 120);
   console.log(vehiculo1.estaEncendido); // False

   vehiculo1.encender();
   console.log(vehiculo1.estaEncendido);//True

   vehiculo1.apagar();
   console.log(vehiculo1.estaEncendido); // False
   

   //3. Que pasa si se quiere acelerar pero el coche esta apagado
   
   console.log(vehiculo1.velocidad); //0
   vehiculo1.acelerar(50); //50 km /h
   console.log(vehiculo1.velocidad); // 50km/h

   vehiculo1.frenar(20);
   console.log(vehiculo1.velocidad); // 30km/h

   //Casos limite;
   
  
console.log("Comprobar acelerar con un numero negativo: ")
console.log(vehiculo1.velocidad);
//2. Que pasa si la cantidad a acelerar es negativa
vehiculo1.acelerar(-40); // En vez de restar, no hace nada, para evitar que la velocidad se quede negativa
console.log(vehiculo1.velocidad);


vehiculo1.encender();

console.log(vehiculo1.estaEncendido);
//1. Que pasa si la cantidad a acelerar hace que se supere el limite de 120km/h
vehiculo1.acelerar(140);
console.log(vehiculo1.velocidad)

vehiculo1.frenar(190);
console.log(vehiculo1.velocidad); // 0km/h



