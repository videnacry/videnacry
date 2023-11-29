import { Injectable } from '@angular/core';

import { SectionServiceTemplate } from './section.service.template';
import { MatDialog } from '@angular/material/dialog';

import { GoArtworksComponent } from '../artworks/go-artworks.component';

@Injectable({
  providedIn: null
})
export class GoArtworksService extends SectionServiceTemplate {

  constructor (matDialog:MatDialog) {
    const threePos = { x: 40, y: -2, z: -26 }
    const sphereClickHandler = () => {
      this.openDialog()
    }
    super( matDialog, threePos, sphereClickHandler, { width: '300px', component: GoArtworksComponent } )
  }
  
}