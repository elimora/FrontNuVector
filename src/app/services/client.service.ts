import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IApiResponse } from '../interfaces/general';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(
    []
  );
  private currentClient: BehaviorSubject<Client | null> =
    new BehaviorSubject<Client | null>(null);

  constructor(private http: HttpClient) {}

  fetchClients() {
    this.http
      .get<IApiResponse<Client[]>>(`${environment.apiUrl}/clients`)
      .pipe(tap((res) => this.clients.next(res.body)))
      .subscribe();
  }

  getClients() {
    return this.clients.asObservable();
  }

  fetchClient(id: string) {
    this.http
      .get<IApiResponse<Client>>(`${environment.apiUrl}/clients/${id}`)
      .pipe(tap((res) => this.currentClient.next(res.body)))
      .subscribe();
  }

  getClient() {
    return this.currentClient.asObservable();
  }

  deleteClient(id: string) {
    return this.http.delete<void>(`${environment.apiUrl}/clients/${id}`);
  }

  createClient(client: Client) {
    return this.http.post<IApiResponse<Client>>(
      `${environment.apiUrl}/clients`,
      client
    );
  }

  updateClient(id: string, updateClientObj: Client) {
    return this.http.put<IApiResponse<Client>>(
      `${environment.apiUrl}/clients/${id}`,
      updateClientObj
    );
  }
}
