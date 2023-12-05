import { ApplicationRef, Component } from '@angular/core';

import { SectionServiceTemplate } from '../services/section.service.template';
import { SummaryService } from '../services/summary.service';
import { ProjectsService } from '../services/projects.service';
import { GoArtworksService } from '../services/go-artworks.service';

import { Mesh, SphereGeometry, MeshStandardMaterial, Color } from 'three';
import { extend, NgtBeforeRenderEvent } from 'angular-three';
import { HobbiesService } from '../services/hobbies.service';
import { calculateOrbitCoordinates } from './utils';
extend({ Mesh, SphereGeometry, MeshStandardMaterial })

@Component({
  selector: 'portfolio-ngt-spheres',
  templateUrl: './spheres.component.html',
})
export class SpheresComponent {
  
  readonly spheres
  constructor (summaryService:SummaryService, projectsService:ProjectsService, goArtworksService:GoArtworksService, hobbiesService:HobbiesService, applicationRef:ApplicationRef) {
    const services = [ summaryService, projectsService, goArtworksService, hobbiesService ]

    const orbit = { index: -1, type: Math.random(), isActive: true, isForward: true }
    const defaultStyles = {
      isHovered: false,
      defaultColor: Color.NAMES.crimson,
      hoveredColor: Color.NAMES.cornflowerblue
    }

    this.spheres = services.map(service => {
      
      const sphere = { service, ...defaultStyles, orbit: {...orbit}, click: () => {}, rotate: (event:NgtBeforeRenderEvent<THREE.Mesh>) => {} } 

      sphere.click = () => {
        sphere.service.openDialog()
        applicationRef.tick() // angular-three is messing with the lifecycle of the components instantiated by its click event
      }
      
      sphere.rotate = (event) => {

        if (sphere.orbit.isActive) {
          if (sphere.orbit.index < 0) {
            sphere.orbit.isForward = true
            sphere.orbit.type = Math.random()
          }

          if (sphere.orbit.index > 120 || sphere.orbit.isForward == false) {
            sphere.orbit.index -= 1
            sphere.orbit.isForward = false
          } else if (sphere.orbit.isForward == true) {
            sphere.orbit.index += 1
          }
          const { x, y, z } = calculateOrbitCoordinates(sphere.orbit.index, 120, sphere.orbit.type, sphere.service.threePos)
          event.object.position.set(x, y, z)

        }

      }
      return sphere
    })
  }
  updatePos(event: NgtBeforeRenderEvent<THREE.Mesh>, sphereService:SectionServiceTemplate) {
      event.object.position.set(sphereService.threePos.x, sphereService.threePos.y, sphereService.threePos.z)
  }

}

