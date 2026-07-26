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
  userName='';
  constructor(public mngmntService: StatemngmntService){}
updateName() {
    this.mngmntService.updateUserName(this.userName);
  }

}
