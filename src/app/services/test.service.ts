import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

   userText$ = new BehaviorSubject<string>('');

   emitUserText(value: string): void {
     this.userText$.next(value);
   }

}
