import { Component } from '@angular/core';
import { IClient } from './cliente.modelo';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers: IClient[]= [
    {
      clientsName: 'Sancho Panza',
      nationality: 'Arabe',
      phone: '84249427234'
    },
    {
      clientsName: 'Juancho Talarga',
      nationality: 'Espanol',
      phone: '62828394'
    },
    {
      clientsName: 'Georgelina Perez',
      nationality: 'Argentina',
      phone: '13374849775'
    }
  ]

}
