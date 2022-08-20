import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IApiResponse } from '../interfaces/general';
import { Products } from '../models/products.models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API_URI = 'http://localhost:3000';
  private products: BehaviorSubject<Products[]> = new BehaviorSubject<
    Products[]
  >([]);

  constructor(private http: HttpClient) {}

  fetchProducts() {
    this.http
      .get<IApiResponse<Products[]>>(`${this.API_URI}/products`)
      .pipe(tap((res) => this.products.next(res.body)))
      .subscribe();
  }

  getProducts() {
    return this.products.asObservable();
  }
}
