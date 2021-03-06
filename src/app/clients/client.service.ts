import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Client from '../shared/models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  findAll(): Promise<Client[]> {
    return this.http
      .get<Client[]>(`${environment.API_URL}/clients`)
      .pipe(take(1))
      .toPromise();
  }

  save(record: Client): any {
    // let userRef = JSON.stringify(result);

    this.http.post(`${environment.API_URL}/clients`, record).subscribe(
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

  findById(id: any): any {
    return this.http
      .get<Client>(`${environment.API_URL}/clients/${id}`)
      .pipe(take(1));
  }

  delete(id: number) {
    this.http
      .delete(`${environment.API_URL}/clients/${id}`)
      .subscribe((data) => {
        data = id;
      });
  }
}
