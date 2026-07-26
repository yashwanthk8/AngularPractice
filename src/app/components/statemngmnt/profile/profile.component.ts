import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StatemngmntService } from '../../../services/statemngmnt.service';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
constructor(public mngmntService: StatemngmntService){}
userName="yash";
updateName(){
this.mngmntService.userName=this.userName;
}
}
