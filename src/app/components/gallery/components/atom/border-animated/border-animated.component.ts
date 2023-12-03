import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-border-animated',
  templateUrl: './border-animated.component.html',
  styleUrls: ['./border-animated.component.scss']
})
export class BorderAnimatedComponent {
  

  @Input() isCircle:boolean = false;
  @Input() isVertical:boolean = true;
  
}
