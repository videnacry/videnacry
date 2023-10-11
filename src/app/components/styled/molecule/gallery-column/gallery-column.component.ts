import { Component, Input, HostBinding } from '@angular/core';
import { GalleryImage } from '../gallery-image/class';
import { orientation, size } from '../../atom/standard-size/type';

@Component({
  selector: 'app-gallery-column',
  templateUrl: './gallery-column.component.html',
  styleUrls: ['./gallery-column.component.scss']
})
export class GalleryColumnComponent {

  @Input() widthChangeDirection:WidthChangeDirection = {shouldChange:false, sizeToChange:'a0', orientation:'horizontal'}

  @Input() imagesUp:GalleryImage[] = []
  @Input() imagesDown:GalleryImage[] = []

  @HostBinding('class.grow') @Input() grow:boolean = true
  @HostBinding('class.width-change-direction') get ShouldChangeDirection():boolean {return this.widthChangeDirection.shouldChange}
}

type WidthChangeDirection = {
  shouldChange:boolean,
  sizeToChange:size,
  orientation:orientation
}