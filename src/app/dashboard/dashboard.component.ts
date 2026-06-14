import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, HeaderComponent, UserComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

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
