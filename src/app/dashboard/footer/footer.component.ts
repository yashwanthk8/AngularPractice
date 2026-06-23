import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @HostBinding('class.hovered') isHovered = true;

  @HostListener('click') onClick(){
    console.log('footer got clicked');
  }


}
