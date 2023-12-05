import { ApplicationRef, Component } from '@angular/core';

import { iSpellText } from '../services/utils';
import { AppService } from 'src/app/app.service';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'portfolio-go-artworks',
  template: `
    <mat-card >
        
    <portfolio-modal-header [spellText]="spellText" [loadedHandler]="loadedHandler" [closeModal]="closeModal"/>
  
      <mat-card-content>
        <p [style]="{textAlign:'center'}">Do you want to go the artworks gallery?</p>
      </mat-card-content>
      
      <mat-card-actions align="end" *ngIf="showActions">
          <button mat-stroked-button color="accent" (click)="clickHandler()">accept</button>
      </mat-card-actions>
    
    </mat-card>
  `,
  styles: [`
    .example-header-image {
        background-image: url("/assets/profile-circle-small.webp");
        background-size: cover;
      }
  `]
})
export class GoArtworksComponent {

  clickHandler = () => {
    this._dialogRef.close()
    this._appService.goToArtworks()
    this._applicationRef.tick()
  }
  
  showActions = false
  spelledOut = ''
  spellText:iSpellText = {
    chars: `
    Go to the artworks
    `,
    isActive: true
  }
  constructor (private _applicationRef:ApplicationRef, private _dialogRef:DialogRef, private _appService:AppService) {}
  
  loadedHandler = () => {
    this.showActions = true
    this._applicationRef.tick()
  }

  closeModal = () => {
    this._dialogRef.close()
  }


}