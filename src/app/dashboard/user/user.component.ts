import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() userName = '';
  @Input() role = '';

  @Output() userSelected = new EventEmitter<string>();
  selectUser(){
    this.userSelected.emit(this.userName);
  }
}
