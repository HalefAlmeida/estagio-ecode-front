import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly API_URL: string = 'http://localhost:8080/ecode';

  user: User;

  constructor(private http: HttpClient) {}

  private findByEmail(email: string) {
    return this.http.get<User>(`${this.API_URL}/users/${email}`);
  }

  login(email: any, password: any) {
    const userRef = this.findByEmail(email);

    userRef.subscribe((data) => {
      console.log(data.email);
    });

    // console.log(data);
    return this.user;
  }
}
