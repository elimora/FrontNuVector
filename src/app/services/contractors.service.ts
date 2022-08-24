import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../interfaces/general';
import { Contractor } from '../models/contractors.models';

@Injectable({
  providedIn: 'root',
})
export class ContractorsService {
  private contractor: BehaviorSubject<Contractor[]> = new BehaviorSubject<
    Contractor[]
  >([]);

  constructor(private http: HttpClient) {}

  fetchContractor() {
    this.http
      .get<IApiResponse<Contractor[]>>(`${environment.apiUrl}/contractors`)
      .pipe(tap((res) => this.contractor.next(res.body)))
      .subscribe();
  }

  getContractors() {
    return this.contractor.asObservable();
  }
}
