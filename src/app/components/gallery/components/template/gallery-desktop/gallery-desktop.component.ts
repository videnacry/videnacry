import { ApplicationRef, Component } from '@angular/core';
import { GalleryTemplateComponent } from '../gallery-template.component';

@Component({
  selector: 'app-gallery-desktop',
  templateUrl: './gallery-desktop.component.html',
  styleUrls: ['./gallery-desktop.component.scss']
})
export class GalleryDesktopComponent extends GalleryTemplateComponent {
 
  constructor(_applicationRef:ApplicationRef) {
    super(_applicationRef)
  }
}

