import { Component } from '@angular/core';

import { SceneComponent } from './scene.component';


@Component({
  selector: 'app-portfolio',
  template: `
  <ngt-canvas [sceneGraph]="SceneGraph" class="canvas"/>
  <portfolio-pos />
  <!-- <portfolio-manual-button [styles]="{position:'absolute', bottom:0, right:0}"/> -->
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