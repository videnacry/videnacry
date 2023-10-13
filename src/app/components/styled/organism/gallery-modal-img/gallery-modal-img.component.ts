import { Component, Input } from '@angular/core';
import { GalleryImage } from '../../molecule/gallery-image/class';
import { size } from '../../atom/standard-size/type';

@Component({
  selector: 'app-gallery-modal-img',
  templateUrl: './gallery-modal-img.component.html',
  styleUrls: ['./gallery-modal-img.component.scss']
})
export class GalleryModalImgComponent {

  @Input() image:GalleryImage = new GalleryImage({})
  @Input() size?:size = 'unset'
}
