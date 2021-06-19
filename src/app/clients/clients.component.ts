import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

import { MatDialog } from '@angular/material/dialog';
import Client from '../shared/models/client';
import {
  DialogComponent,
  DIALOG_MODE,
} from '../shared/components/dialog/dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients$: Promise<Client[]>;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.clients$ = this.clientService.findAll();
    console.log(this.clients$);
  }

  add() {
    let client: Client;
    this.router.navigate(['/clients/detail']);
  }

  edit(client: Client) {
    this.router.navigate(['/clients', client.id, 'editar']);
  }

  delete(client: Client) {
    this.clientService.delete(client.id);
  }
}
