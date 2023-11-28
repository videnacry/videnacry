import { Injectable } from '@angular/core';
import { SectionServiceTemplate } from './section.service.template';

@Injectable({
  providedIn: 'root'
})
export class SummaryService extends SectionServiceTemplate {

  constructor () {
    const threePos = { x: -12, y: -14, z: -35 }
    super({ threePos , isActive: false })
  }
  
}
