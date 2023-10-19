import { Component, HostBinding, Input } from '@angular/core';
import { orientation, size } from './type'

@Component({
  selector: 'app-standard-size',
  templateUrl: './standard-size.component.html',
  styleUrls: ['./standard-size.component.scss']
})
export class StandardSizeComponent {

  @Input() size:size = 'a5'
  @Input() sizeTablet:size|'' = ''
  @Input() orientation:orientation = 'vertical'
  

  @HostBinding('class') get getClassStyle():string {return `${this.size} ${this.orientation} ${this.sizeTablet}-tablet`}
  @HostBinding('class.grow') @Input() grow:boolean = true
  @HostBinding('class.padding') @Input() padding:boolean = true

  @HostBinding('class.max-width') @Input() maxWidth:boolean = false
}
