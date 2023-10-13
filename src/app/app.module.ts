import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PanelColoredComponent } from './components/styled/atom/panel-colored/panel-colored.component';
import { ColumnOrRowComponent } from './components/styled/molecule/column-or-row/column-or-row.component';
import { GalleryComponent } from './components/styled/template/gallery/gallery.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PanelColoredComponent,
    ColumnOrRowComponent,
    GalleryComponent,
    GalleryImageComponent,
    StandardSizeComponent,
    GalleryArticleComponent,
    GalleryCardComponent,
    ArticleComponent,
    GalleryColumnComponent,
    GalleryColumnCardImgComponent,
    GalleryColumnImgTemplateComponent,
    GalleryModalImgComponent,
    ImgLittleGalleryComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
