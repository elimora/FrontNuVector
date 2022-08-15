import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(`${this.API_URI}/tasks-entries`);
  }

  getTask(id: string) {
    return this.http.get(`${this.API_URI}/task-entry/${id}`);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.API_URI}/task-entries/${id}`);
  }
  createTask(task: Task) {
    return this.http.post(`${this.API_URI}/projects`, task);
  }

  updateTask(id: string, updateTaskOjb: Task) {
    return this.http.put(`${this.API_URI}/projects/${id}`, updateTaskOjb);
  }
}
