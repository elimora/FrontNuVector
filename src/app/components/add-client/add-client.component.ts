import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { text } from 'stream/consumers';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  addUser: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.addUser = this.fb.group({
      name: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      industry_code: ['', [Validators.required]],
      active: ['', [Validators.required]],
    });
  }

  createFormUser() {}

  ngOnInit(): void {}

  AddClient() {
    const name = this.addUser.value.name;
    const city = this.addUser.value.city;
    const state = this.addUser.value.state;
    const country = this.addUser.value.country;
    const industry_code = this.addUser.value.industry_code;
    const active = this.addUser.value.active;
    //const active = true;

    const ClientToSave: Client = {
      name,
      city,
      state,
      country,
      industry_code,
      active,
    };

    this.clientService.createClient(ClientToSave).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err),
    });
  }
}
