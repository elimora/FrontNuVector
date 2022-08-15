import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get(`${this.API_URI}/clients`);
  }

  getClient(id: string) {
    return this.http.get(`${this.API_URI}/clients/${id}`);
  }

  deleteClient(id: string) {
    return this.http.delete(`${this.API_URI}/clients/${id}`);
  }
  createClient(client: Client) {
    return this.http.post(`${this.API_URI}/clients`, client);
  }

  updateClient(id: string, updateClientObj: Client) {
    return this.http.put(`${this.API_URI}/projects/${id}`, updateClientObj);
  }
}
