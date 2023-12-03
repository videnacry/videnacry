import { Component, HostBinding, Input } from '@angular/core';

import { GalleryImage } from './class';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent {
  
  @Input() image:GalleryImage = new GalleryImage({})
  @HostBinding('class.grow') @Input() grow:boolean = true

  handlerClick(pImage:GalleryImage) {
    pImage.handlerClick()
  }
}
