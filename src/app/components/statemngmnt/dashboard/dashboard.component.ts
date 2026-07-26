import { Component } from '@angular/core';
import { StatemngmntService } from '../../../services/statemngmnt.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(public mngmntService: StatemngmntService){}

}
