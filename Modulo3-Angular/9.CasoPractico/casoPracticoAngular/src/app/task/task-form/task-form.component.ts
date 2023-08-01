import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from 'src/app/task/models/task.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  
 task: ITask = { id: 0, title: '', description: '', hours: 0 };
  taskForm = new FormGroup({
    id: new FormControl<number>(0),
    title: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    description: new FormControl<string>('', [Validators.maxLength(500)]),
    hours: new FormControl<number>(0)
    
  });

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const taskId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (taskId) {
      this.task = this.taskService.getTaskById(taskId) || this.task;
    }
  }
  loadForm(task: ITask): void {

    this.taskForm.reset({
      id: task.id,
      title: task.title,
      description: task.description,
      hours: task.hours
    });
  }

  onSubmit(): void {
    let id = this.taskForm.get('id')?.value ?? 0;
    let title = this.taskForm.get('title')?.value ?? '';
    let description = this.taskForm.get('description')?.value ?? '';
    let hours = this.taskForm.get('hours')?.value ?? 30;

    let task: ITask = {
      id: id,
      title: title,
      description: description,
      hours: hours
    }


    if (this.task.id === 0) {
      // Crear nueva tarea
      this.taskService.createTask(task);
    } else {
      // Actualizar tarea existente
      this.taskService.updateTask(task);
    }
    this.router.navigate(['/tasks']);
  }
  
}
