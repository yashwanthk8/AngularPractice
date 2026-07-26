import { Component } from '@angular/core';
import { ProfileComponent } from "./profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FooterComponent } from "../../dashboard/footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-statemngmnt',
  imports: [ProfileComponent, DashboardComponent, FooterComponent, HeaderComponent],
  templateUrl: './statemngmnt.component.html',
  styleUrl: './statemngmnt.component.css'
})
export class StatemngmntComponent {

}
