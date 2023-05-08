import { Component } from '@angular/core';
import { ITask } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: ITask[] = [{
    id: 1,
    title: 'Crear modulos en Angular',
    hours: 7
  },
  {
    id: 2,
    title: 'Crear componentes en Angular',
    hours: 8
  },
  {
    id: 3,
    title: 'Crear servicios en Angular',
    hours: 10
  }
  ]
}
