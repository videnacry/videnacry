import { Component } from '@angular/core';

import { SceneComponent } from './scene.component';


@Component({
  selector: 'app-portfolio',
  template: `
  <ngt-canvas [sceneGraph]="SceneGraph" />
  <portfolio-pos />
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  readonly SceneGraph = SceneComponent;

}