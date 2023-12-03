import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <div [style]="{ width:'100%', backgroundColor:'black' }">
      <div [style]="{ overflow:'hidden', position:'relative', maxHeight:'100vw', maxWidth:'100vw', height:'100vh', width:'100vh', margin:'auto' }">
        <div [style]="{ height:'100%', width:'100%', backgroundImage:'url(./assets/giphy-rainbow.webp)', backgroundPosition:'center', backgroundSize:'contain', filter:'brightness(2) hue-rotate(0deg)' }"></div>
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
  `
})

export class GalleryComponent {
  title = 'videnacry-gallery';
  windowInnerWidth:number = window.innerWidth
}
