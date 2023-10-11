import { Component, Input } from '@angular/core';
import { orientation, size } from '../../atom/standard-size/type';
import { color } from 'src/app/types';
import { GalleryImage } from '../../molecule/gallery-image/class';
import { padding } from '../../atom/article/types';

@Component({
  selector: 'app-gallery-column-card-img',
  templateUrl: './gallery-column-card-img.component.html',
  styleUrls: ['./gallery-column-card-img.component.scss']
})
export class GalleryColumnCardImgComponent {

  windowInnerWidth:number = window.innerWidth

  @Input() size:size = 'a5'
  @Input() sizeTablet:size = 'a4'

  @Input() padding:padding = 'none'
  @Input() orientation:orientation = 'vertical'
  @Input() color:color = 'primary'
  @Input() bgImg:string = ''
  @Input() title:string = ''
  @Input() lines:string[] = []
  
  @Input() image:GalleryImage = new GalleryImage({})

  @Input() images:GalleryImage[] = [new GalleryImage({})]
}
