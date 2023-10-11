import { Component, HostBinding, Input } from '@angular/core';
import { orientation, size } from '../../atom/standard-size/type';
import { color } from 'src/app/types';
import { GalleryImage } from '../gallery-image/class';
import { padding } from '../../atom/article/types';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent {

  @Input() size:size = 'a5'
  @Input() sizeTablet:size = 'a4'

  @Input() image:GalleryImage = new GalleryImage({})
  @Input() windowInnerWidth:number = window.innerWidth
  @Input() title:string = ''
  @Input() lines:string[] = []
  @Input() padding:padding = 'none'

  @Input() orientation:orientation = 'vertical'
  @Input() color:color = 'primary'
  @HostBinding('class.grow') @Input() grow:boolean = true
  
}