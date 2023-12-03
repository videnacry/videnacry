import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: `
  <ng-template [ngIf]="appService.isInPortfolio" [ngIfElse]="artworks">
    <app-portfolio/>
  </ng-template>


  <ng-template #artworks>
    <app-gallery/>
  </ng-template>
  `
})
export class AppComponent {
  title = 'videnacry';
  windowInnerWidth:number = window.innerWidth

  get appService () { return this._appService }

  constructor (private _appService:AppService) {}
}
