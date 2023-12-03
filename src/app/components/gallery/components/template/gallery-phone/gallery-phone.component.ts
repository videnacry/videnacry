import { ApplicationRef, Component } from '@angular/core';
import { GalleryTemplateComponent } from '../gallery-template.component';

@Component({
  selector: 'app-gallery-phone',
  templateUrl: './gallery-phone.component.html',
  styleUrls: ['./gallery-phone.component.scss']
})
export class GalleryPhoneComponent extends  GalleryTemplateComponent{
  constructor(_applicationRef:ApplicationRef) {
    super(_applicationRef)
  }
}
