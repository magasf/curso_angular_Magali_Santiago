import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from 'src/app/task/models/task.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  
  taskForm!: FormGroup;
  task!: ITask; ;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.initForm();
    this.loadTask();
    
  }

  initForm(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      hours: ['', [Validators.required, Validators.min(1)]]
    });
  }

  loadTask(): void {
    const taskId = this.activatedRoute.snapshot.paramMap.get('id'); 
    if (taskId) {
      this.task = this.taskService.getTask(+taskId) || { id: 0, title: '', description: '', hours: 0 };
      this.taskForm.patchValue(this.task);
    } else {
      this.task = { id: 0, title: '', description: '', hours: 0 };
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      if (this.task.id) {
        this.taskService.updateTask({ ...this.task, ...taskData });
      } else {
        this.taskService.createTask({ ...this.task, ...taskData });
      }
      this.router.navigate(['/task/:id']);
    }
  }
}
