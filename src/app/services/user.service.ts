import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://68ea9e1376b3362414cbc496.mockapi.io/api/v1/users';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }

  ggetUsers() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users: any[]) =>
        users.map(user => ({

          fullName: `${user.name} ${user.id}`,

        }))
      )
    );
  }
}
