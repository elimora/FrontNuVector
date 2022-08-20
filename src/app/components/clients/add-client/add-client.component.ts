import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { text } from 'stream/consumers';
import { threadId } from 'worker_threads';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      industry_code: ['', [Validators.required]],
      active: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  AddClient() {
    const { id, name, city, state, country, industry_code, active } =
      this.addUserForm.value;

    const ClientToSave: Client = {
      id,
      name,
      city,
      state,
      country,
      industry_code,
      active: Boolean(active),
    };

    this.clientService.createClient(ClientToSave).subscribe({
      next: (res) => {
        this.clientService.fetchClients();
        this.addUserForm.reset();
      },
      error: (err) => console.error(err),
    });
  }
}
