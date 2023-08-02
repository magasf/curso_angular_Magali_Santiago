import { Injectable } from '@angular/core';
import { ITask } from './models/task.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: ITask[] = [];
  private storageKey = 'tasks';

  constructor() {
    this.loadTasksFromLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasksFromLocalStorage() {
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    this.tasks = tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
  }

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTask(id: number): ITask | undefined {
    return this.tasks.find(task => task.id === id);
  }

  createTask(task: ITask): void {
    task.id = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
    this.tasks.push(task);
    this.saveTasksToLocalStorage();
  }

  updateTask(task: ITask): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasksToLocalStorage();
  }
  

}