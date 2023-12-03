import { ApplicationRef, Component } from '@angular/core';
import { GalleryTemplateComponent } from '../gallery-template.component';

@Component({
  selector: 'app-gallery-tablet',
  templateUrl: './gallery-tablet.component.html',
  styleUrls: ['./gallery-tablet.component.scss']
})
export class GalleryTabletComponent extends GalleryTemplateComponent {

  constructor(_applicationRef:ApplicationRef) {
    super(_applicationRef)
  }
}
