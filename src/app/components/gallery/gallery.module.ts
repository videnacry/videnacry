import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';

import { PanelColoredComponent } from './components/atom/panel-colored/panel-colored.component';
import { ColumnOrRowComponent } from './components/molecule/column-or-row/column-or-row.component';
import { GalleryImageComponent } from './components/molecule/gallery-image/gallery-image.component';
import { StandardSizeComponent } from './components/atom/standard-size/standard-size.component';
import { GalleryArticleComponent } from './components/molecule/gallery-article/gallery-article.component';
import { GalleryCardComponent } from './components/molecule/gallery-card/gallery-card.component';
import { ArticleComponent } from './components/atom/article/article.component';
import { GalleryColumnComponent } from './components/molecule/gallery-column/gallery-column.component';
import { GalleryColumnCardImgComponent } from './components/organism/gallery-column-card-img/gallery-column-card-img.component';
import { GalleryColumnImgTemplateComponent } from './components/organism/gallery-column-img-template/gallery-column-img-template.component';
import { GalleryModalImgComponent } from './components/organism/gallery-modal-img/gallery-modal-img.component';
import { ImgLittleGalleryComponent } from './components/organism/gallery-modal-img/img-little-gallery/img-little-gallery.component';
import { GalleryDesktopComponent } from './components/template/gallery-desktop/gallery-desktop.component';
import { GalleryPhoneComponent } from './components/template/gallery-phone/gallery-phone.component';
import { GalleryTabletComponent } from './components/template/gallery-tablet/gallery-tablet.component';
import { ShapeSizeComponent } from './components/atom/shape-size/shape-size.component';
import { GalleryManualComponent } from './components/template/gallery-manual/gallery-manual.component';
import { BorderAnimatedComponent } from './components/atom/border-animated/border-animated.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GalleryComponent,
    PanelColoredComponent,
    ColumnOrRowComponent,
    GalleryImageComponent,
    StandardSizeComponent,
    GalleryArticleComponent,
    GalleryCardComponent,
    ArticleComponent,
    GalleryColumnComponent,
    GalleryColumnCardImgComponent,
    GalleryColumnImgTemplateComponent,
    GalleryModalImgComponent,
    ImgLittleGalleryComponent,
    GalleryDesktopComponent,
    GalleryTabletComponent,
    GalleryPhoneComponent,
    ShapeSizeComponent,
    GalleryManualComponent,
    BorderAnimatedComponent
  ],
  imports: [ CommonModule ],
  exports: [ GalleryComponent ],
  providers: [],
  bootstrap: [ GalleryComponent ]
})
export class GalleryModule { 
  
}
