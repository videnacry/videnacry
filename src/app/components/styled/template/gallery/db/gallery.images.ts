import { GalleryImage} from '../../../molecule/gallery-image/class'

export class GalleryImages {
    static instance = new GalleryImages()

    
    //biography
    biography:GalleryImage = new GalleryImage({pPath:'assets/biography240w.webp', pSizeTablet: 'a4'})
    

    //animals
    bull:GalleryImage = new GalleryImage({pPath:'assets/animals/bull/300w.webp', pSizeTablet: 'a4'})
    condor:GalleryImage = new GalleryImage({pPath:'assets/animals/condor/300w.webp', pSizeTablet: 'a4'})
    goat:GalleryImage = new GalleryImage({pPath:'assets/animals/goat/430w.webp', pOrientation:'horizontal',pSize:'a5', pSizeTablet: 'a4'})
    jellyfish:GalleryImage = new GalleryImage({pPath:'assets/animals/jellyfish/300w.webp', pSizeTablet: 'a4'})
    liondragon:GalleryImage = new GalleryImage({pPath:'assets/animals/liondragon/380w.webp', pOrientation:'horizontal', pSize: 'a6', pSizeTablet: 'a5'})
    panther:GalleryImage = new GalleryImage({pPath:'assets/animals/panther/300w.webp', pSizeTablet: 'a4'})
    snake:GalleryImage = new GalleryImage({pPath:'assets/animals/snake/300w.webp', pSizeTablet: 'a4'})
    turkey:GalleryImage = new GalleryImage({pPath:'assets/animals/turkey/300w.webp', pSizeTablet: 'a4'})
    
    //environments
    lovers:GalleryImage = new GalleryImage({pPath:'assets/environments/lovers/400h.webp', pSize:'a4', pOrientation:'horizontal', pSizeTablet: 'a3'})
    pact:GalleryImage = new GalleryImage({pPath:'assets/environments/yoga/pact/600w.webp', pSize:'a6', pOrientation:'horizontal', pSizeTablet: 'a5'})

    //groups
    awareness:GalleryImage = new GalleryImage({pPath:'assets/groups/awareness/680w.webp', pSize:'a1', pSizeTablet: 'a0'})
    hodgepodge:GalleryImage = new GalleryImage({pPath:'assets/groups/hodgepodge/680h.webp', pSize:'a1', pSizeTablet: 'a0', pOrientation:'horizontal'})
    mage:GalleryImage = new GalleryImage({pPath:'assets/groups/mage/680w.webp', pSize:'a1', pSizeTablet: 'a0'})
    role:GalleryImage = new GalleryImage({pPath:'assets/groups/role/680w.webp', pSize:'a1', pSizeTablet: 'a0'})

    //collages
    lion:GalleryImage = new GalleryImage({pPath:'assets/groups/awareness/collage/430w.webp', pSize:'a5', pSizeTablet: 'a3'})
    demon:GalleryImage = new GalleryImage({pPath:'assets/groups/mage/collage/450w.webp', pSize:'a4', pSizeTablet: 'a3'})
    deity:GalleryImage = new GalleryImage({pPath:'assets/groups/hodgepodge/collage/400h.webp', pSize:'a4', pOrientation:'horizontal', pSizeTablet: 'a1'})

    //people
    raulitos:GalleryImage = new GalleryImage({pPath:'assets/people/family/raulitos/660h.webp', pSize:'a1', pOrientation:'horizontal', pSizeTablet: 'a0'})
    christian:GalleryImage = new GalleryImage({pPath:'assets/people/family/semigods/christian/300w.webp', pSizeTablet: 'a4'})
    ivelina:GalleryImage = new GalleryImage({pPath:'assets/people/family/semigods/ivelina/300w.webp', pSizeTablet: 'a4'})
    luciana:GalleryImage = new GalleryImage({pPath:'assets/people/family/semigods/luciana/300w.webp', pSizeTablet: 'a4'})

    osho:GalleryImage = new GalleryImage({pPath:'assets/people/gurus/osho/300w.webp', pSizeTablet: 'a4'})

    //portrait
    portrait:GalleryImage = new GalleryImage({pPath:'assets/portrait/300w.webp', pSizeTablet: 'a4'})


    //sket
    jungle:GalleryImage = new GalleryImage({pPath:'assets/sket/jungle/350w.webp', pOrientation:'vertical', pSizeTablet: 'a4'})
    pirates:GalleryImage = new GalleryImage({pPath:'assets/sket/pirates/300w.webp', pSizeTablet: 'a3'})

    //thinks
    camera:GalleryImage = new GalleryImage({pPath:'assets/things/camera/300w.webp', pSizeTablet: 'a4'})

}

