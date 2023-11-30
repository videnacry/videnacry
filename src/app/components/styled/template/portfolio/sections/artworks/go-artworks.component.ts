import { ApplicationRef, Component } from '@angular/core';

import { iSpellText } from '../services/utils';
import { GoArtworksService } from '../services/go-artworks.service';
import { AppService } from 'src/app/app.service';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'portfolio-go-artworks',
  template: `
    <mat-card >
        
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{spelledOut}}</mat-card-title>
        <mat-card-subtitle>Berón Gamboa Gavilanes</mat-card-subtitle>
      </mat-card-header>
  
      <mat-divider />
  
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

  clickHandler
  
  showActions = false
  spelledOut = ''
  spellText:iSpellText = {
    chars: `
    Go to the artworks
    `,
    isActive: true
  }
  constructor (_state:GoArtworksService, _applicationRef:ApplicationRef, _appService:AppService, _dialogRef:DialogRef) {
    this.clickHandler = () => {
      _dialogRef.close()
      _appService.goToArtworks()
    }

    _state.spellSubscriber(this.spellText).subscribe({
      next: spellOut => {
        this.spelledOut = spellOut;
        _applicationRef.tick()
      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => {
        this.showActions = true
        _applicationRef.tick()
      }
    });
  }


}