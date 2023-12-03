import { Component, HostBinding, Input } from '@angular/core';
import { GalleryImage } from '../../../molecule/gallery-image/class';

@Component({
  selector: 'app-img-little-gallery',
  templateUrl: './img-little-gallery.component.html',
  styleUrls: ['./img-little-gallery.component.scss']
})
export class ImgLittleGalleryComponent {

  @Input() image:GalleryImage = new GalleryImage({})

  @Input() isManual:boolean = false;

  @HostBinding('class.vertical-img') get isImageVertical ():boolean {
    return this.image.orientation == 'vertical'
  }
  @HostBinding('class.horizontal-img') get isImageHorizontal ():boolean {
    return this.image.orientation == 'horizontal'
  }
}
