import { size, orientation } from '../../../atom/standard-size/type'
import { color } from '../../../../../types'


export type pGalleryImage = {
    
    pColor?:color,
    pPath?:string,

    pSize?:size,
    pSizeTablet?:size,
    pOrientation?:orientation,

    pTitle?:string,
    pLines?:string[]
}

export class GalleryImage {
    
    path:string = ''
    color:color = 'primary'

    title:string = ''
    lines:string[] = ['']

    size:size = 'a5'
    sizeTablet:size = 'unset'
    orientation:orientation = 'vertical'


    constructor ({pColor = 'primary', pPath = '', pSize = 'a5', pSizeTablet = 'unset', pOrientation = 'vertical', pTitle = '', pLines = ['']}:pGalleryImage) {

        this.color = pColor
        this.path = pPath

        this.size = pSize
        this.sizeTablet = pSizeTablet
        this.orientation = pOrientation

        this.title = pTitle
        this.lines = pLines
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