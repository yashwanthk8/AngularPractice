import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

private http = inject(HttpClient);
  getUser(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/1');
  }
  getPosts() {
  return this.http.get<any[]>(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
}
getTodos() {
  return this.http.get<any[]>(
    'https://jsonplaceholder.typicode.com/todos?userId=1'
  );
}
}
