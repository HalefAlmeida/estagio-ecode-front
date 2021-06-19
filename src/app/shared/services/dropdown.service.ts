import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import City from '../models/city';
import State from '../models/state';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get<City[]>(`${environment.API_URL}/cities`).pipe(take(1));
  }

  getStates() {
    return this.http
      .get<State[]>(`${environment.API_URL}/states`)
      .pipe(take(1));
  }
}
