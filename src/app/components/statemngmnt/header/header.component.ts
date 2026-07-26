import { Component } from '@angular/core';
import { StatemngmntService } from '../../../services/statemngmnt.service';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(public mngmntService: StatemngmntService){}
}
