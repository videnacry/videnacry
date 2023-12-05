import { ApplicationRef, TemplateRef } from "@angular/core";

import { ColumnOrRowProjection } from "../molecule/column-or-row/class";
import { GalleryImages } from "../../db/gallery.images";
import { GalleryImage } from "../molecule/gallery-image/class";


export class GalleryTemplateComponent {

  get applicationRef() { return this._applicationRef }
  constructor (private _applicationRef:ApplicationRef) {}



  changeHueRotate (e:any) {
    document.body.style.filter = `hue-rotate(${e.currentTarget?.value}deg)`
  }

  changeColorInvert (e:any) {
    document.getElementsByTagName('html')[0].style.filter = `invert(${e.currentTarget?.value})`
  }



    
  images:GalleryImages = GalleryImages.instance

  musicUpProjectionObj:ColumnOrRowProjection = new ColumnOrRowProjection({pShouldStyle:true })
  musicDownProjectionObj:ColumnOrRowProjection = new ColumnOrRowProjection({pShouldStyle:true })


  getUpTemplate = (pTemplate:TemplateRef<any>) => {
    this.musicUpProjectionObj.template = pTemplate
    return this.musicUpProjectionObj
  }

  getDownTemplate = (pTemplate:TemplateRef<any>) => {
    this.musicDownProjectionObj.template = pTemplate
    return this.musicDownProjectionObj
  }




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
    this._applicationRef.tick()
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