import { Component, Input, Output } from '@angular/core';

import { tPos } from './portfolio.service';

import { Mesh, SphereGeometry, MeshStandardMaterial, Color } from 'three';
import { extend, NgtBeforeRenderEvent } from 'angular-three';
extend({ Mesh, SphereGeometry, MeshStandardMaterial })

@Component({
  selector: 'portfolio-sphere',
  template: `
  <ngt-mesh (click)="isActive = !isActive" (pointerover)="isHovered = true" (pointerout)="isHovered = false" [position]="[ pos.x, pos.y, pos.z ]" (beforeRender)="updatePos(($any($event)))" [scale]="1.4"]>
    <ngt-sphere-geometry/>
    <ngt-mesh-standard-material [color]="isHovered ? hoveredColor : isActive ? activeColor : defaultColor"/>
  </ngt-mesh>
  `,
})
export class SphereComponent {
    @Input() @Output() isActive: boolean = false
    isHovered = false;
    defaultColor = Color.NAMES.crimson
    hoveredColor = Color.NAMES.blueviolet
    activeColor = Color.NAMES.cornflowerblue
    emissiveColor = Color.NAMES.goldenrod

    @Input() clickHandler = () => {}
    @Input() pos: tPos = { x: 0, y: 0, z: 0}
    updatePos(event: NgtBeforeRenderEvent<THREE.Mesh>) {
        event.object.position.set(this.pos.x, this.pos.y, this.pos.z)
    }
}
