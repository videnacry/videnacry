import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery-component';
import { GalleryImage } from '../../../molecule/gallery-image/class';

@Component({
  selector: 'app-gallery-desktop',
  templateUrl: './gallery-desktop.component.html',
  styleUrls: ['./gallery-desktop.component.scss']
})
export class GalleryDesktopComponent extends GalleryComponent {

  isLimitedToOneModal = true

  imagesGroup:imagesGroupType = {
    first: [],
    second: [],
    third: [],
    fourth: [],
    fifth: [],
    sixth: [],
    seventh: [],
    eighth: [],
    nineth: [],
    tenth: [],
    eleventh: [],
    twelfth: [],
    thirteenth: [],
    fourteenth: [],
    fifteenth: [],
    sixteenth: [],
    seventeenth: [],
    eighteenth: [],
  }

  handler_toggleModalNumberLimitation:Function = (pImage:GalleryImage):void => {
    this.isLimitedToOneModal = !this.isLimitedToOneModal;
    this.removeAllModals();
    pImage.handlerClick();
  }

  getImageWithClickHandler = (pImage:GalleryImage, pGroupName:groupNameType) => {
    pImage.changeHandlerClick(this.toggleToImagesGroupHandler(pImage, pGroupName))
    return pImage;
  }

  toggleToImagesGroupHandler = (pImage:GalleryImage, pGroupName:groupNameType) => () => this.toggleToImagesGroup(pImage, pGroupName)

  toggleToImagesGroup = (pImage:GalleryImage, pGroupName:groupNameType):void => {
    const imageIndexInGroup = this.imagesGroup[pGroupName].indexOf(pImage)
    if (imageIndexInGroup >= 0) {
      this.isLimitedToOneModal ? this.removeAllModals() : this.imagesGroup[pGroupName].splice(imageIndexInGroup, 1)
    } else {
      if (this.isLimitedToOneModal) this.removeAllModals()
      this.imagesGroup[pGroupName].push(pImage)
    }
  }

  removeAllModals() {
    this.imagesGroup = {
      first: [],
      second: [],
      third: [],
      fourth: [],
      fifth: [],
      sixth: [],
      seventh: [],
      eighth: [],
      nineth: [],
      tenth: [],
      eleventh: [],
      twelfth: [],
      thirteenth: [],
      fourteenth: [],
      fifteenth: [],
      sixteenth: [],
      seventeenth: [],
      eighteenth: [],
    }
  }
  
}

type groupNameType =     'first'|'second'|'third'|'fourth'|'fifth'|'sixth'|'seventh'|'eighth'|'nineth'|'tenth'|'eleventh'|'twelfth'|'thirteenth'|'fourteenth'|'fifteenth'|'sixteenth'|'seventeenth'|'eighteenth'


type imagesGroupType = {
  first: GalleryImage[],
  second: GalleryImage[],
  third: GalleryImage[],
  fourth: GalleryImage[],
  fifth: GalleryImage[],
  sixth: GalleryImage[],
  seventh: GalleryImage[],
  eighth: GalleryImage[],
  nineth: GalleryImage[],
  tenth: GalleryImage[],
  eleventh: GalleryImage[],
  twelfth: GalleryImage[],
  thirteenth: GalleryImage[],
  fourteenth: GalleryImage[],
  fifteenth: GalleryImage[],
  sixteenth: GalleryImage[],
  seventeenth: GalleryImage[],
  eighteenth: GalleryImage[]
}
