import { Injectable } from '@angular/core';

import { SectionServiceTemplate } from './section.service.template';
import { MatDialog } from '@angular/material/dialog';
import { SummaryComponent } from '../summary/summary.component';

@Injectable({
  providedIn: null
})
export class SummaryService extends SectionServiceTemplate {

  constructor (matDialod:MatDialog) {
    const threePos = { x: -12, y: -14, z: -35 }
    super( matDialod, threePos, { width: '400px', component: SummaryComponent } )
  }
  
}
