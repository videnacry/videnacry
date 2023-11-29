import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { SectionServiceTemplate } from './section.service.template';
import { HobbiesComponent } from '../hobbies/hobbies.component';


@Injectable({
  providedIn: null
})
export class HobbiesService extends SectionServiceTemplate {

  constructor (matDialog:MatDialog) {
    const threePos = { x: 28, y: -15, z: 20 }
    const sphereClickHandler = () => {
      this.openDialog()
    }
    super( matDialog, threePos, sphereClickHandler, { width: '360px', component: HobbiesComponent } )
  }
  
}