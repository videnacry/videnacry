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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';


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
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule
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
