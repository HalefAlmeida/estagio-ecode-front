import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

import { MatDialog } from '@angular/material/dialog';
import { NewClientComponent } from './new-client/new-client.component';
import Client from '../shared/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients$: Promise<Client[]>;

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.clients$ = this.clientService.findAll();
    console.log(this.clients$);
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewClientComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
