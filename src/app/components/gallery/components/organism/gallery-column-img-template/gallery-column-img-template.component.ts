import { Component, Input } from '@angular/core';

import { orientation, size } from '../../atom/standard-size/type';

import { color } from '../../types';

import { GalleryImage, pGalleryImage } from '../../molecule/gallery-image/class';

@Component({
  selector: 'app-gallery-column-img-template',
  templateUrl: './gallery-column-img-template.component.html',
  styleUrls: ['./gallery-column-img-template.component.scss']
})
export class GalleryColumnImgTemplateComponent {
  @Input() size:size = 'a5'
  @Input() sizeTablet:size|'' = ''
  @Input() orientation:orientation = 'vertical'
  @Input() color:color = 'primary'
  @Input() bgImg:string = ''
  @Input() title:string = ''

  @Input() image?:GalleryImage
  @Input() screenChangeDirection:boolean = true
}
