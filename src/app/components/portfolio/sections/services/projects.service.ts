import { Injectable } from '@angular/core';

import { SectionServiceTemplate } from './section.service.template';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsComponent } from '../projects/projects.component';

@Injectable({
  providedIn: null
})
export class ProjectsService extends SectionServiceTemplate {

  constructor (matDialog:MatDialog) {
    const threePos = { x: -30, y: -18, z: -4 }
    
    super( matDialog, threePos, { width: '500px', component: ProjectsComponent } )
  }
  
}