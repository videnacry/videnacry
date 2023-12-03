import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from './components/gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    GalleryModule,
    PortfolioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
