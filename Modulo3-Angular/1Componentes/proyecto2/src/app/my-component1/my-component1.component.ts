import { Component } from '@angular/core';
interface IProduct{
  id: number;
  title: string;
  price:  number;

}
@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css']
})
export class MyComponent1Component {
  mensaje: string = "Hola buenos dias, desde ejemplo1";
  precio: number = 3.99;
  product1: IProduct = {
    id: 1,
    title: 'Ordenador portatil MSI Modern',
    price: 1500.0
  }
}
