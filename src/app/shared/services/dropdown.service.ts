import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import City from '../models/city';
import State from '../models/state';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  readonly API_URL: string = 'http://localhost:8080/ecode';

  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get<City[]>(`${this.API_URL}/cities`).pipe(take(1));
  }

  getStates() {
    return this.http.get<State[]>(`${this.API_URL}/states`).pipe(take(1));
  }
}
