import { Component, HostBinding, Input } from '@angular/core';
import { GalleryImage } from '../../molecule/gallery-image/class';
import { size } from '../../atom/standard-size/type';
import { color } from 'src/app/types';

@Component({
  selector: 'app-gallery-modal-img',
  templateUrl: './gallery-modal-img.component.html',
  styleUrls: ['./gallery-modal-img.component.scss']
})
export class GalleryModalImgComponent {


  @Input() image:GalleryImage = new GalleryImage({})

  @Input() size:size = 'a1';
  @Input() color:color = 'dark';

  @Input() isLimitedToOneModal = false;

  @Input() handler_toggle:Function = () => {}
  @HostBinding('class.horizontal-img') get isImageVertical ():boolean {
    return this.image.orientation == 'horizontal'
  }
  

  handler_close(image:GalleryImage) {
    image.handlerClick();
  }

}
