import { size, orientation } from '../../../atom/standard-size/type'
import { color } from '../../../../../types'


export type pGalleryImage = {
    pColor?:color,
    pPath?:string,
    pSize?:size,
    pSizeTablet?:size,
    pOrientation?:orientation
}

export class GalleryImage {
    
    path:string = ''
    color:color = 'primary'
    size:size = 'a5'
    sizeTablet:size = 'unset'
    orientation:orientation = 'vertical'


    constructor ({pColor = 'primary', pPath = '', pSize = 'a5', pSizeTablet = 'unset', pOrientation = 'vertical'}:pGalleryImage) {

        this.color = pColor
        this.path = pPath
        this.size = pSize
        this.sizeTablet = pSizeTablet
        this.orientation = pOrientation
    }


    changeSize = (pSize:size) => {
        this.size = pSize
        return this
    }


    changeSizeTablet = (pSizeTablet:size) => {
        this.sizeTablet = pSizeTablet
        return this
    }
    
    changeSizeOrientation = (pSizeOrientation:orientation) => {
        this.orientation = pSizeOrientation
        return this
    }
}