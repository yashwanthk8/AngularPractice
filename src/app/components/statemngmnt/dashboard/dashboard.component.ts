import { Component } from '@angular/core';
import { StatemngmntService } from '../../../services/statemngmnt.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(public mngmntService: StatemngmntService){}

}
