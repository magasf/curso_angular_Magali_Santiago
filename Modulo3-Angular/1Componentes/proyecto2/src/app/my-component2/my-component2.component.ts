import { Component } from '@angular/core';
import { ILaptop } from './laptop.model';



@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css']
})
export class MyComponent2Component {
  mensaje: string = "Hola mundo desde componente2";

  ordenador1: ILaptop = {
    fabricante: 'MSI',
    modelo: 'Modern 1316X',
    ram: 32
  }
  ordenador2: ILaptop = {
    fabricante: 'ASUS',
    modelo: 'A55A',
    ram: 16
  }

  

}
