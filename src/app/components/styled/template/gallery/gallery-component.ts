import { TemplateRef } from "@angular/core";
import { ColumnOrRowProjection } from "../../molecule/column-or-row/class";
import { GalleryImages } from "./db/gallery.images";



export class GalleryComponent {

    
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
}