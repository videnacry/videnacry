import { Component } from '@angular/core';

import { SceneComponent } from './scene.component';


@Component({
  selector: 'app-portfolio',
  template: `
  <ngt-canvas [sceneGraph]="SceneGraph" class="canvas"/>
  
  <!-- <portfolio-pos /> this element is just for developer (change the spheres position)-->

  <portfolio-manual-button/>
  `,
  styles: [`
  :host {
    display: block;
    width: 100%;
    height: 100vh;
  }
  .canvas {
      position: fixed;
  }
  `]
})
export class PortfolioComponent {
  readonly SceneGraph = SceneComponent
}