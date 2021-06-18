import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly API_URL: string = 'http://localhost:8080/ecode';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.API_URL}/users`).pipe(take(1));
  }
}
