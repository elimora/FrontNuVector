import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.models';
import { map, Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/general';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http
      .get<IApiResponse<Project[]>>(`${this.API_URI}/projects`)
      .pipe(map((res) => res.body));
  }

  getProject(id: string) {
    return this.http.get(`${this.API_URI}/projects/${id}`);
  }

  deleteProject(id: string) {
    return this.http.delete(`${this.API_URI}/projects/${id}`);
  }
  createProject(project: Project) {
    return this.http.post(`${this.API_URI}/projects`, project);
  }

  updateProject(id: string, updatePro: Project) {
    return this.http.put(`${this.API_URI}/projects/${id}`, updatePro);
  }
}
