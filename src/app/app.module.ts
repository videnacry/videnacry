import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PanelColoredComponent } from './components/styled/atom/panel-colored/panel-colored.component';
import { ColumnOrRowComponent } from './components/styled/molecule/column-or-row/column-or-row.component';
import { GalleryImageComponent } from './components/styled/molecule/gallery-image/gallery-image.component';
import { StandardSizeComponent } from './components/styled/atom/standard-size/standard-size.component';
import { GalleryArticleComponent } from './components/styled/molecule/gallery-article/gallery-article.component';
import { GalleryCardComponent } from './components/styled/molecule/gallery-card/gallery-card.component';
import { ArticleComponent } from './components/styled/atom/article/article.component';
import { GalleryColumnComponent } from './components/styled/molecule/gallery-column/gallery-column.component';
import { GalleryColumnCardImgComponent } from './components/styled/organism/gallery-column-card-img/gallery-column-card-img.component';
import { GalleryColumnImgTemplateComponent } from './components/styled/organism/gallery-column-img-template/gallery-column-img-template.component';
import { GalleryModalImgComponent } from './components/styled/organism/gallery-modal-img/gallery-modal-img.component';
import { ImgLittleGalleryComponent } from './components/styled/organism/gallery-modal-img/img-little-gallery/img-little-gallery.component';
import { GalleryDesktopComponent } from './components/styled/template/gallery/gallery-desktop/gallery-desktop.component';
import { GalleryPhoneComponent } from './components/styled/template/gallery/gallery-phone/gallery-phone.component';
import { GalleryTabletComponent } from './components/styled/template/gallery/gallery-tablet/gallery-tablet.component';
import { ShapeSizeComponent } from './components/styled/atom/shape-size/shape-size.component';
import { GalleryManualComponent } from './components/styled/template/gallery/gallery-manual/gallery-manual.component';
import { BorderAnimatedComponent } from './components/styled/atom/border-animated/border-animated.component';
import { PortfolioModule } from './components/styled/template/portfolio/portfolio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
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
  imports: [
    BrowserModule,
    PortfolioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
