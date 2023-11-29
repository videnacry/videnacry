import { ApplicationRef, Component } from '@angular/core';

import { iSpellText } from '../services/utils';
import { GoArtworksService } from '../services/go-artworks.service';


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
          <button mat-stroked-button color="accent">Accent</button>
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

  showActions = false
  spelledOut = ''
  spellText:iSpellText = {
    chars: `
    Go to the artworks
    `,
    isActive: true
  }
  constructor (private _state:GoArtworksService, private _applicationRef:ApplicationRef) {
    this._state.spellSubscriber(this.spellText).subscribe({
      next: spellOut => {
        this.spelledOut = spellOut;
        this._applicationRef.tick()
      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => {
        this.showActions = true
        this._applicationRef.tick()
      }
    });
  }

}