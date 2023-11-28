import { Component } from '@angular/core';

import { SceneComponent } from './scene.component';
import { SummaryService } from './sections/services/summary.service';
import { ProjectsService } from './sections/services/projects.service';


@Component({
  selector: 'app-portfolio',
  template: `
  <ngt-canvas [sceneGraph]="SceneGraph" />
  <portfolio-pos />
  <portfolio-summary *ngIf="summaryService.isActive" />
  <portfolio-projects *ngIf="projectsService.isActive"/>
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  readonly SceneGraph = SceneComponent
  constructor (readonly summaryService:SummaryService, readonly projectsService:ProjectsService) { }
}