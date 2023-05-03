import { Component } from '@angular/core';
import { Irestaurante } from './restaurante.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {
  restaurante1: Irestaurante = {
    nombre: 'McDonalds',
    calle: 'Av America 6',
    puertas: false,
  }

}
