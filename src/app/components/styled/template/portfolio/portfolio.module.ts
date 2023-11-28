import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgtPush, NgtArgs, NgtCanvas } from 'angular-three';

import { PortfolioComponent } from './portfolio.component';
import { SceneComponent } from './scene.component';
import { SpheresComponent } from './sections/spheres.component';
import { ProjectsComponent } from './sections/projects/projects.component'
import { SummaryComponent } from './sections/summary/summary.component';
import { PosComponent } from './sections/pos.component';


import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    SpheresComponent,
    PosComponent,
    PortfolioComponent,
    SceneComponent,
    SummaryComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    NgtCanvas,
    NgtPush,
    NgtArgs,
    MatCardModule
  ],
  exports: [
    SpheresComponent,
    PosComponent,
    PortfolioComponent,
    SceneComponent,
    SummaryComponent,
    ProjectsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioModule { }
