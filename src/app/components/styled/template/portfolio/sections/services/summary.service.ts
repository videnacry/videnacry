import { Injectable } from '@angular/core';

import { SectionServiceTemplate } from './section.service.template';
import { MatDialog } from '@angular/material/dialog';
import { SummaryComponent } from '../summary/summary.component';

import { PortfolioModule } from '../../portfolio.module';

@Injectable({
  providedIn: null
})
export class SummaryService extends SectionServiceTemplate {

  constructor (matDialod:MatDialog) {
    const threePos = { x: -12, y: -14, z: -35 }
    const sphereClickHandler = () => {
      this.openDialog()
    }
    super( matDialod, threePos, sphereClickHandler, { width: '400px', component: SummaryComponent } )
  }
  
}
