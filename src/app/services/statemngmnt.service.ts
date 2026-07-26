import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatemngmntService {

  private userNameSubject = new BehaviorSubject<string>('yashwanth');

userName$ = this.userNameSubject.asObservable();
updateUserName(name: string) {
    this.userNameSubject.next(name);
  }
  constructor() {}

}
