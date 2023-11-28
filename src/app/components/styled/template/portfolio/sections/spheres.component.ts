import { ApplicationRef, Component, Input } from '@angular/core';

import { SectionServiceTemplate } from './services/section.service.template';
import { SummaryService } from './services/summary.service';
import { ProjectsService } from './services/projects.service';

import { Mesh, SphereGeometry, MeshStandardMaterial, Color } from 'three';
import { extend, NgtBeforeRenderEvent } from 'angular-three';
extend({ Mesh, SphereGeometry, MeshStandardMaterial })

@Component({
  selector: 'portfolio-ngt-spheres',
  template: `
  <ngt-mesh *ngFor="let sphere of spheres" 
  (click)="click(sphere)" 
  (pointerover)="sphere.isHovered = true" 
  (pointerout)="sphere.isHovered = false" 
  [position]="[ sphere.service.threePos.x, sphere.service.threePos.y, sphere.service.threePos.z ]" 
  (beforeRender)="updatePos(($any($event)), sphere.service)" 
  [scale]="1.4"]>
    <ngt-sphere-geometry/>
    <ngt-mesh-standard-material [color]="sphere.isHovered ? sphere.hoveredColor : sphere.service.isActive ? sphere.activeColor : sphere.defaultColor"/>
  </ngt-mesh>

  `,
})
export class SpheresComponent {
  
  readonly spheres
  constructor (summaryService:SummaryService, projectsService:ProjectsService, private _applicationRef:ApplicationRef) {
    const defaultStyles = {
      isHovered: false,
      defaultColor: Color.NAMES.crimson,
      hoveredColor: Color.NAMES.blueviolet,
      activeColor: Color.NAMES.cornflowerblue
    }
    const summary = { service: summaryService, ...defaultStyles }
    const projects = { service: projectsService, ...defaultStyles }
    this.spheres = [ summary, projects ]
  }
  updatePos(event: NgtBeforeRenderEvent<THREE.Mesh>, sphereService:SectionServiceTemplate) {
      event.object.position.set(sphereService.threePos.x, sphereService.threePos.y, sphereService.threePos.z)
  }
  click = (sphere:any) => {
    sphere.service.toggleIsActive()
    this._applicationRef.tick()
  }
}
