import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://68ea9e1376b3362414cbc496.mockapi.io/api/v1/users';

  constructor(private http: HttpClient) { }

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
