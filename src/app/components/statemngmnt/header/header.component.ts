import { Component } from '@angular/core';
import { StatemngmntService } from '../../../services/statemngmnt.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(public mngmntService: StatemngmntService){}
}
