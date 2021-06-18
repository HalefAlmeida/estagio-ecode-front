import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  readonly API_URL: string = 'http://localhost:8080/ecode';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.API_URL}/clients`).pipe(take(1));
  }
}
