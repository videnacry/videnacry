import { ApplicationRef, Component } from '@angular/core';
import { GalleryComponent } from '../gallery-component';

@Component({
  selector: 'app-gallery-tablet',
  templateUrl: './gallery-tablet.component.html',
  styleUrls: ['./gallery-tablet.component.scss']
})
export class GalleryTabletComponent extends GalleryComponent {

  constructor(_applicationRef:ApplicationRef) {
    super(_applicationRef)
  }
}
