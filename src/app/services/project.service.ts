import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.models';
import { BehaviorSubject, tap, map, Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/general';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  private project: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>(
    []
  );

  fetchProjects(searchParams: { name?: string; client?: string } = {}) {
    this.http
      .get<IApiResponse<Project[]>>(`${environment.apiUrl}/projects`, {
        params: searchParams,
      })
      .pipe(tap((res) => this.project.next(res.body)))
      .subscribe();
  }

  getProjects() {
    return this.project.asObservable();
  }

  getProject(id: string) {
    return this.http.get(`${environment.apiUrl}/projects/${id}`);
  }

  deleteProject(id: string) {
    return this.http.delete(`${environment.apiUrl}/projects/${id}`);
  }
  createProject(project: Project) {
    return this.http.post(`${environment.apiUrl}/project`, project);
  }

  updateProject(id: string, updatePro: Project) {
    return this.http.put(`${environment.apiUrl}/projects/${id}`, updatePro);
  }
}
