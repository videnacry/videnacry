import { Component, TemplateRef, ViewChild } from '@angular/core';
import { GalleryImages } from './db/gallery.images';
import { GalleryImage } from '../../molecule/gallery-image/class';
import { ColumnOrRowProjection } from '../../molecule/column-or-row/class';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{

  images:GalleryImages = GalleryImages.instance
  windowInnerWidth:number = window.innerWidth

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
