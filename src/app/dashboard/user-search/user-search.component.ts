import { TestService } from './../../services/test.service';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent {
 userSelection$ = new Subject<number>();

 text="";

 get buttonLabel(): string {
   return this.router.url === '/search' ? 'Go to Home' : 'Go to Search';
 }

 get buttonLink(): string[] {
   return this.router.url === '/search' ? ['/'] : ['/search'];
 }

ngOnInit() {
  this.testService.userText$.subscribe((value) => {
    console.log('UserSearch received:', value);
    this.text=value;
  });

  this.userSelection$
    .pipe(

      switchMap(id =>
        this.userService.getUser(id)
      )

    )
    .subscribe(response => {

      console.log(response);

      this.user = response;

    });

}
  user: any;
 constructor(
   private userService: UserService,
   private testService: TestService,
   public router: Router
 ) {}

  loadUser(id: number) {

  this.userSelection$.next(id);

}

}
