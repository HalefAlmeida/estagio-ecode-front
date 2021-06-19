import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs/operators';
import Client from '../shared/models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  readonly API_URL: string = 'http://localhost:8080/ecode';

  constructor(private http: HttpClient) {}

  findAll(): Promise<Client[]> {
    return this.http
      .get<Client[]>(`${this.API_URL}/clients`)
      .pipe(take(1))
      .toPromise();
  }
}
