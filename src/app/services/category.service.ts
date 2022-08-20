import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IApiResponse } from '../interfaces/general';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  API_URI = 'http://localhost:3000';
  private category: BehaviorSubject<Category[]> = new BehaviorSubject<
    Category[]
  >([]);

  constructor(private http: HttpClient) {}

  fetchCategory() {
    this.http
      .get<IApiResponse<Category[]>>(`${this.API_URI}/category`)
      .pipe(tap((res) => this.category.next(res.body)))
      .subscribe();
  }

  getCategory() {
    return this.category.asObservable();
  }
}
