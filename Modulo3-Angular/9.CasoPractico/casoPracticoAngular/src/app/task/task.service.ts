import { Injectable } from '@angular/core';
import { ITask } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: ITask[] = [];
  private storageKey = 'tasks';

  constructor() {

  }
  private getTasksFromLocalStorage(): ITask[] {
    const tasksString = localStorage.getItem(this.storageKey);
    return tasksString ? JSON.parse(tasksString) : [];
  }

  private saveTasksToLocalStorage(tasks: ITask[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  findAllTask(): ITask[] {
    return this.getTasksFromLocalStorage();
  }

  getTaskById(id: number): ITask | undefined {
    return this.findAllTask().find((task) => task.id === id);
  }



  createTask(task: ITask): void {
    const tasks = this.getTasksFromLocalStorage();
    task.id = this.generateNextId(tasks);
    tasks.push(task);
    this.saveTasksToLocalStorage(tasks);
    console.log(task)
  }

  private generateNextId(tasks: ITask[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
  }

  updateTask(task: ITask): void {
    const tasks = this.getTasksFromLocalStorage();
    const index = tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      this.saveTasksToLocalStorage(tasks);
      console.log(task)
    }
  }
  deleteTask(id: number): void {
    const tasks = this.getTasksFromLocalStorage().filter((task) => task.id !== id);
    this.saveTasksToLocalStorage(tasks);
  }

  deleteAllTask() {
   return this.tasks = []
  }

}