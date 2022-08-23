import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.models';
import { IApiResponse } from '../interfaces/general';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  API_URI = 'http://localhost:3000';

  private task: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  private currentTask: BehaviorSubject<Task | null> =
    new BehaviorSubject<Task | null>(null);
  constructor(private http: HttpClient) {}

  fetchTasks(searchParams: { client?: string } = {}) {
    this.http
      .get<IApiResponse<Task[]>>(`${this.API_URI}/tasks-entries`, {
        params: searchParams,
      })
      .pipe(tap((res) => this.task.next(res.body)))
      .subscribe();
  }

  getTasks() {
    return this.task.asObservable();
  }

  // getTasks() {
  //   return this.http
  //     .get<IApiResponse<Task[]>>(`${this.API_URI}/tasks-entries`)
  //     .pipe(map((res) => res.body));
  // }

  fetchTask(id: string) {
    this.http
      .get<IApiResponse<Task>>(`${this.API_URI}/task-entry/${id}`)
      .pipe(tap((res) => this.currentTask.next(res.body)))
      .subscribe();
  }

  getTask() {
    return this.currentTask.asObservable();
  }

  // getTask(id: string) {
  //   return this.http.get(`${this.API_URI}/task-entry/${id}`);
  // }

  deleteTask(id: string) {
    return this.http.delete(`${this.API_URI}/task-entries/${id}`);
  }
  createTask(task: Task) {
    return this.http.post(`${this.API_URI}/task-entries`, task);
  }

  updateTask(id: string, updateTaskOjb: Task) {
    return this.http.put(`${this.API_URI}/task-entries/${id}`, updateTaskOjb);
  }
}
