import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: `
  <ng-template [ngIf]="appService.isInPortfolio" [ngIfElse]="artworks">
    <app-portfolio></app-portfolio>
  </ng-template>


  <ng-template #artworks>
    <div [style]="{ width:'100%', backgroundColor:'black' }">
      <div [style]="{ overflow:'hidden', position:'relative', maxHeight:'100vw', maxWidth:'100vw', height:'100vh', width:'100vh', margin:'auto' }">
        <div [style]="{ height:'100%', width:'100%', backgroundImage:'url(./assets/giphy-rainbow.webp)', backgroundPosition:'center', backgroundSize:'contain' }"></div>
        <div [style]="{ position:'absolute', zIndex:100, top:'-1%', left:'-1%', height:'102%', width:'102%', backgroundImage:'url(./assets/giphy-name-x-message.gif)', backgroundPosition:'center', backgroundSize:'contain', filter:'brightness(0)' }"></div>
      </div>
    </div>

    <app-gallery-manual></app-gallery-manual>
  
    <ng-container *ngIf="windowInnerWidth >= 1200" >
        <app-gallery-desktop></app-gallery-desktop>
    </ng-container>
  
    <ng-container *ngIf="(windowInnerWidth >= 700 && windowInnerWidth <1200)">
        <app-gallery-tablet></app-gallery-tablet>
    </ng-container>

    <ng-container *ngIf="windowInnerWidth < 700">
        <app-gallery-phone></app-gallery-phone>
    </ng-container>
  </ng-template>
  `
})
export class AppComponent {
  title = 'videnacry';
  windowInnerWidth:number = window.innerWidth

  get appService () { return this._appService }

  constructor (private _appService:AppService) {}
}
