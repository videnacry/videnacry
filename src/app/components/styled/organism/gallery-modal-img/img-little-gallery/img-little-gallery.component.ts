import { Component, Input } from '@angular/core';
import { GalleryImage } from '../../../molecule/gallery-image/class';

@Component({
  selector: 'app-img-little-gallery',
  templateUrl: './img-little-gallery.component.html',
  styleUrls: ['./img-little-gallery.component.scss']
})
export class ImgLittleGalleryComponent {

  @Input() image:GalleryImage = new GalleryImage({})
}
