import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css'],
})
export class ClientsTableComponent implements OnInit {
  clients: Client[] = [];
  constructor(private readonly clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.fetchClients();

    this.clientService.getClients().subscribe({
      next: (res) => ((this.clients = res), console.log(res)),
      error: (err) => console.log(err),
    });
  }
}
