import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import City from 'src/app/shared/models/city';
import Client from 'src/app/shared/models/client';
import State from 'src/app/shared/models/state';
import User from 'src/app/shared/models/user';
import { DropdownService } from 'src/app/shared/services/dropdown.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
})
export class ClientDetailComponent implements OnInit {
  form: FormGroup;

  cities: City[];

  states: State[];

  user: User;

  client: any = {};

  routeSub: Subscription;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private dropdownService: DropdownService
  ) {
    this.form = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],

      user: this.fb.group({
        id: [null],
        email: [null, [Validators.email, Validators.required]],
        password: [null, [Validators.required]],
      }),

      gender: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      rg: [null],
      cep: [null, [Validators.required]],
      address: [null, [Validators.required]],
      number: [null, [Validators.required]],
      district: [null, [Validators.required]],
      addressComplement: [null],

      city: this.fb.group({
        id: [null],
        name: [null, [Validators.required]],
      }),

      phone: [null],
      celPhone: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.client = this.clientService.findById(id);

      if (this.client === null) {
        this.client = {};
      }
    });

    this.dropdownService
      .getCities()
      .subscribe((dados) => (this.cities = dados));

    this.dropdownService
      .getStates()
      .subscribe((dados) => (this.states = dados));
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onSubmit() {
    console.log(this.form);
  }
}
