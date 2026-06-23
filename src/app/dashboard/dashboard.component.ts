import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './card/card.component';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, HeaderComponent, UserComponent, FooterComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {



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
