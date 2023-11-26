import { Component } from '@angular/core';
import { PortfolioSection, PortfolioService } from '../portfolio.service';

/**
 * this component is just to be put inside a canvas
 */
@Component({
  selector: 'portfolio-projects-three',
  template: `
    <portfolio-sphere [clickHandler]="clickHandler" [pos]="state.threePos" [isActive]="state.isActive"/>
  `,
})
export class ProjectsThreeComponent {
    private _state = new PortfolioSection({ x: 0, y: 0, z: 0})
    get state () { return this._state }
  
    constructor ({ projects: aProjects }: PortfolioService) {
      this._state = aProjects
    }
  
    clickHandler = () => {}
  }