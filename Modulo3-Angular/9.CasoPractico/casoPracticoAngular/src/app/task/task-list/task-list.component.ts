import { Component, OnInit } from '@angular/core';
import { ITask } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  displayedColumns: string[] = 
  [
    'title', 
    'date', 
    'description', 
    'hours', 
    'actions'
  ];
  

  tasks: ITask[] = [];

  constructor(
    private taskService: TaskService
  ){}

  ngOnInit(): void {
    this.tasks = this.taskService.findAllTask();
  }

  delete(task: ITask){
    console.log(task);
    this.taskService.deleteTask(task.id)
  }

  deleteAll(){
    this.taskService.deleteAllTask()
  }
  
}