import { Component } from '@angular/core';

import { SectionServiceTemplate } from './services/section.service.template';
import { SummaryService } from './services/summary.service';
import { ProjectsService } from './services/projects.service';
import { GoArtworksService } from './services/go-artworks.service';

import { Mesh, SphereGeometry, MeshStandardMaterial, Color } from 'three';
import { extend, NgtBeforeRenderEvent } from 'angular-three';
import { HobbiesService } from './services/hobbies.service';
extend({ Mesh, SphereGeometry, MeshStandardMaterial })

@Component({
  selector: 'portfolio-ngt-spheres',
  template: `
  <ngt-mesh *ngFor="let sphere of spheres" 
  (click)="sphere.service.sphereClickHandler()" 
  (pointerdown)="sphere.pointerdownHandler()"
  (pointerup)="sphere.pointerupHandler()"
  (pointerover)="sphere.isHovered = true" 
  (pointerout)="sphere.isHovered = false" 
  [position]="[ sphere.service.threePos.x, sphere.service.threePos.y, sphere.service.threePos.z ]" 
  (beforeRender)="updatePos(($any($event)), sphere.service)" 
  [scale]="1.4"]>
    <ngt-sphere-geometry/>
    <ngt-mesh-standard-material [color]="sphere.isHovered ? sphere.hoveredColor : sphere.isActive ? sphere.activeColor : sphere.defaultColor"/>
  </ngt-mesh>

  `,
})
export class SpheresComponent {
  
  readonly spheres
  constructor (summaryService:SummaryService, projectsService:ProjectsService, goArtworksService:GoArtworksService, hobbiesService:HobbiesService) {
    const services = [ summaryService, projectsService, goArtworksService, hobbiesService ]

    const defaultStyles = {
      isActive: false,
      isHovered: false,
      defaultColor: Color.NAMES.crimson,
      hoveredColor: Color.NAMES.blueviolet,
      activeColor: Color.NAMES.cornflowerblue
    }

    this.spheres = services.map(service => {
      const sphere = { service, ...defaultStyles, pointerdownHandler: () => {}, pointerupHandler: () => {} } 
      sphere.pointerdownHandler = () => {
        sphere.isActive = true
      }
      sphere.pointerupHandler = () => {
        sphere.isActive = false
      }
      return sphere
    })
  }
  updatePos(event: NgtBeforeRenderEvent<THREE.Mesh>, sphereService:SectionServiceTemplate) {
      event.object.position.set(sphereService.threePos.x, sphereService.threePos.y, sphereService.threePos.z)
  }
}
