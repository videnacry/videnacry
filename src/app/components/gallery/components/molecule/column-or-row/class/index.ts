import { TemplateRef } from "@angular/core"
import { orientation, size } from "../../../atom/standard-size/type"

export type columnOrRowProjection = {

    pSize?:size
    pSizeTablet?:size
    pOrientation?:orientation
    pShouldStyle?:boolean
    pTemplate?:TemplateRef<any>
  
  }
  
  
export class ColumnOrRowProjection {

    size:size = 'a5'
    sizeTablet:size = 'a4'
    orientation:orientation = 'vertical'
    shouldStyle:boolean = false
    template?:TemplateRef<any> = undefined

    constructor ({pSize='a5', pSizeTablet='a4', pOrientation='vertical', pShouldStyle=false, pTemplate=undefined}:columnOrRowProjection) {

    this.size = pSize
    this.sizeTablet = pSizeTablet
    this.orientation = pOrientation
    this.shouldStyle = pShouldStyle
    this.template = pTemplate
  }


}