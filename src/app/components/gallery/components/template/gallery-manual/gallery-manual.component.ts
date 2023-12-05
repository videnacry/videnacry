import { ApplicationRef, Component } from '@angular/core';
import { GalleryTemplateComponent } from '../gallery-template.component';
import { GalleryImage } from '../../molecule/gallery-image/class';
import { orientation, size } from '../../atom/standard-size/type';

@Component({
  selector: 'app-gallery-manual',
  templateUrl: './gallery-manual.component.html',
  styleUrls: ['./gallery-manual.component.scss']
})
export class GalleryManualComponent extends GalleryTemplateComponent{

  modalParts = [
    {
      es: 'Close window',
      eng: 'Cerrar ventana'
    },
    {
      es: 'Buttons to get other photos of the artwork and change size',
      eng: 'Botones para obtener otras fotos de la obra y agrandar imagen'
    },
    {
      es: 'Limit windows to have just one opened',
      eng: 'Limitar las ventanas abiertas a solo una'
    }
  ]

  exampleGalleryImage = new GalleryImage({pPath:this.images.jungle.path , pColor:'none', pSize:'a6', pOrientation:'vertical', pLines:['this is an example']});
  selectedImageIdx = 4

  exampleImages = {
    firstRow: [
      this.images.condor.path,
      this.images.christian.path,
      this.images.panther.path
    ],
    secondRow: [
      this.images.lovers.path,
      this.images.jungle.path
    ]
  }
  
  constructor(_applicationRef:ApplicationRef) {
    super(_applicationRef)
  }
  
  changeExampleImgPath ({pPath, pSize="a6", pOrientation="vertical", pIdx}:{pPath:string, pSize?:size, pOrientation?:orientation, pIdx:number}) {
    this.exampleGalleryImage =  new GalleryImage({pPath, pColor:'none', pSize, pOrientation, pLines:['this is an example']});
    this.selectedImageIdx = pIdx;
    this.applicationRef.tick();
  }
}
