import { ApplicationRef, Component } from '@angular/core';
import { GalleryComponent } from '../gallery-component';
import { GalleryImage } from '../../../molecule/gallery-image/class';
import { orientation, size } from '../../../atom/standard-size/type';

@Component({
  selector: 'app-gallery-manual',
  templateUrl: './gallery-manual.component.html',
  styleUrls: ['./gallery-manual.component.scss']
})
export class GalleryManualComponent extends GalleryComponent{

  constructor(_applicationRef:ApplicationRef) {
    super(_applicationRef)
  }

  getGalleryImage ({pPath, pSize="a6", pOrientation="vertical"}:{pPath:string, pSize?:size, pOrientation?:orientation}):GalleryImage {
    return new GalleryImage({pPath, pColor:'none', pSize, pOrientation});
  }
}
