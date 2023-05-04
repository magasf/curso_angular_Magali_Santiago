import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  contador: number = 0;
  saludo: string = "";

  incrementar(): void {
    console.log('Incrementando ${this.contador}');
    this.contador++;
  }

  decrementar():void{
    this.contador--;
  }
  resetear(): void{
    this.contador = 0;
  }
  saludar(): void {
    this.saludo = "Hola mundo";
  }
  quitarSaludo(): void {
    this.saludo = "";
  }

}
