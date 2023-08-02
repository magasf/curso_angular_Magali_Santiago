import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from '../models/task.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  tasks: ITask[] = [];
  task: ITask | undefined;

 

  constructor(
    private router: Router,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
     this.taskService.getTasks()
     this.loadTasks();
   
  }
  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks)
  }
  getTask(): void {
    
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id')); 
    const task = this.taskService.getTask(id); 
    if (task) {
      this.task = task; 
    } else {
      this.router.navigate(['/tasks']); 
    }
  }
  editTask(id: number): void {
    
    this.router.navigate(['/edit', id]); 
  }
  createTask(): void {
    
    this.router.navigate(['/tasks/new']); 
  }

  
}