import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './card/card.component';
import { UserSearchComponent } from './user-search/user-search.component';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, UserComponent, FooterComponent, CardComponent,UserSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor() {
    of(1,2,3).pipe(map(num => num * 10)).subscribe(console.log);
  }


  @ViewChild('nameInput')
  nameInput!:ElementRef;

  printValue() {
  console.log(this.nameInput.nativeElement.value);
}

  focusInput()
  {
    this.nameInput.nativeElement.focus();
  }

@ViewChild(UserComponent) userComponent!: UserComponent;

@ViewChildren(UserComponent) users1!: QueryList<UserComponent>;

highlightallUsers(){
  this.users1.forEach(user=>{
    user.highlight();
  });
}

callGreet(){
  this.userComponent.greet();
}
selectedUser='';

onUserSelected(name: string){
  this.selectedUser = name;
}

  users = [
  {
    userName:'Yashwanth',
    role:'Angular Developer'
  },
  {
    userName:'John',
    role:'Tester'
  },
  {
    userName:'David',
    role:'Manager'
  }
];

}
