import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import User from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  findAll(): Promise<User[]> {
    return this.http
      .get<User[]>(`${environment.API_URL}/users`)
      .pipe(take(1))
      .toPromise();
  }

  save(record: User): any {
    // let userRef = JSON.stringify(result);

    this.http.post(`${environment.API_URL}/users`, record).subscribe(
      (data) => {
        data = record;
        return data;
      },
      (error) => {
        if ((error.statusText = 'Unknown Error')) {
          console.log('Error on request');
        }
      }
    );
  }

  delete(id: number) {
    this.http.delete(`${environment.API_URL}/users/${id}`).subscribe((data) => {
      data = id;
    });
  }
}
