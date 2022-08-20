import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IApiResponse } from '../interfaces/general';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  API_URI = 'http://localhost:3000';
  private clients: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(
    []
  );
  private currentClient: BehaviorSubject<Client | null> =
    new BehaviorSubject<Client | null>(null);

  constructor(private http: HttpClient) {}

  fetchClients() {
    this.http
      .get<IApiResponse<Client[]>>(`${this.API_URI}/clients`)
      .pipe(tap((res) => this.clients.next(res.body)))
      .subscribe();
  }

  getClients() {
    return this.clients.asObservable();
  }

  fetchClient(id: string) {
    this.http
      .get<IApiResponse<Client>>(`${this.API_URI}/clients/${id}`)
      .pipe(tap((res) => this.currentClient.next(res.body)))
      .subscribe();
  }

  getClient() {
    return this.currentClient.asObservable();
  }

  fetchClientsDeleted(id: string) {
    this.http
      .get<IApiResponse<Client[]>>(`${this.API_URI}/clients/${id}`)
      .pipe(tap((res) => this.clients.next(res.body)))
      .subscribe();
  }

  deleteClient(id: string) {
    //return this.http.delete<void>(`${this.API_URI}/clients/${id}`);
    return this.currentClient.asObservable();
  }
  createClient(client: Client) {
    return this.http.post<IApiResponse<Client>>(
      `${this.API_URI}/clients`,
      client
    );
  }

  updateClient(id: string, updateClientObj: Client) {
    return this.http.put<IApiResponse<Client>>(
      `${this.API_URI}/projects/${id}`,
      updateClientObj
    );
  }
}
