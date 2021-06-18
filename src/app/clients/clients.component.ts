import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: any;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.clients = this.clientService.findAll();
    console.log(this.clients);
  }
}
