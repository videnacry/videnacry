import { Injectable } from '@angular/core';
import { SectionServiceTemplate } from './section.service.template';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends SectionServiceTemplate {

  constructor () {
    const threePos = { x: -50, y: -40, z: 50 }
    super({ threePos , isActive: false })
  }
  
}
