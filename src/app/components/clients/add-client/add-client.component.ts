import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  addClientForm: FormGroup;
  selectedClient: Client | null = null;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.addClientForm = this.fb.group({
      name: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      industry_code: ['', [Validators.required]],
      active: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  saveClient() {
    const { name, city, state, country, industry_code, active } =
      this.addClientForm.value;

    const clientToSave: Client = {
      name,
      city,
      state,
      country,
      industry_code,
      active: Boolean(active),
    };

    const operation = this.selectedClient?.id
      ? this.clientService.updateClient(this.selectedClient.id, clientToSave)
      : this.clientService.createClient(clientToSave);

    operation.subscribe({
      next: () => {
        this.clientService.fetchClients();
        this.addClientForm.reset();
        this.selectedClient = null;
      },
      error: (err) => console.error(err),
    });
  }

  selectClient(client: Client) {
    this.selectedClient = client;
    this.addClientForm.reset(client);
  }
}
