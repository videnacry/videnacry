import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgtPush, NgtArgs, NgtCanvas } from 'angular-three';

import { PortfolioComponent } from './portfolio.component';
import { ProjectsThreeComponent } from './projects/projects.component'
import { SceneComponent } from './scene.component';
import { SphereComponent } from './sphere.component';
import { SummaryThreeComponent } from './summary/summary.component';
import { PosComponent } from './pos.component';



@NgModule({
  declarations: [
    PosComponent,
    PortfolioComponent,
    SceneComponent,
    ProjectsThreeComponent,
    SphereComponent,
    SummaryThreeComponent
  ],
  imports: [
    CommonModule,
    NgtCanvas,
    NgtPush,
    NgtArgs
  ],
  exports: [
    PosComponent,
    PortfolioComponent,
    ProjectsThreeComponent,
    SceneComponent,
    SphereComponent,
    SummaryThreeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioModule { }
