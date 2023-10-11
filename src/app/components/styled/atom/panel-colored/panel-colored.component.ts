import { Component, Input, HostBinding, Host } from '@angular/core';
import { color } from '../../../../types';

@Component({
  selector: 'app-panel-colored',
  templateUrl: './panel-colored.component.html',
  styleUrls: ['./panel-colored.component.scss']
})
export class PanelColoredComponent {

  @HostBinding('class') @Input() color:color = 'primary'
  @HostBinding('class.img') @Input() bgImg:string = ''
  @HostBinding('class.bg-invert') @Input() bgInvert:boolean = false
  @HostBinding('style') get getBgImg():string {return this.bgImg ? `background-image:url(${this.bgImg})` : ''}
  @HostBinding('class.size-fill') @Input() sizeFill:boolean = true
}
