import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IApiResponse } from '../interfaces/general';
import { Contractor } from '../models/contractors.models';

@Injectable({
  providedIn: 'root',
})
export class ContractorsService {
  API_URI = 'http://localhost:3000';
  private contractor: BehaviorSubject<Contractor[]> = new BehaviorSubject<
    Contractor[]
  >([]);

  constructor(private http: HttpClient) {}

  fetchContractor() {
    this.http
      .get<IApiResponse<Contractor[]>>(`${this.API_URI}/contractors`)
      .pipe(tap((res) => this.contractor.next(res.body)))
      .subscribe();
  }

  getContractors() {
    return this.contractor.asObservable();
  }
}
