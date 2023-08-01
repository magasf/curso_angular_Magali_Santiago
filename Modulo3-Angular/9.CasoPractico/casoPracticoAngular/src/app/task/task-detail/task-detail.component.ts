import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { ITask } from '../models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: ITask | undefined;

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
   
  }

  
}