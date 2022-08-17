import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { map, Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/general';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getClients() {
    return this.http
      .get<IApiResponse<Client[]>>(`${this.API_URI}/clients`)
      .pipe(map((res) => res.body));
  }

  getClient(id: string) {
    return this.http.get<IApiResponse<Client>>(`${this.API_URI}/clients/${id}`);
  }

  deleteClient(id: string) {
    return this.http.delete<void>(`${this.API_URI}/clients/${id}`);
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
