import { Injectable } from '@angular/core';
import { SectionServiceTemplate } from './section.service.template';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends SectionServiceTemplate {

  constructor () {
    const threePos = { x: -30, y: -18, z: -4 }
    super({ threePos , isActive: false })
  }
  
}