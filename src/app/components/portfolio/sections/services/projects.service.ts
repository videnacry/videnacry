import { Injectable } from '@angular/core';

import { SectionServiceTemplate } from './section.service.template';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsComponent } from '../projects/projects.component';

import { PortfolioModule } from '../../portfolio.module';

@Injectable({
  providedIn: null
})
export class ProjectsService extends SectionServiceTemplate {

  constructor (matDialog:MatDialog) {
    const threePos = { x: -30, y: -18, z: -4 }
    const sphereClickHandler = () => {
      this.openDialog()
    }
    super( matDialog, threePos, sphereClickHandler, { width: '500px', component: ProjectsComponent } )
  }
  
}