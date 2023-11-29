import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';

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
import { MatDividerModule } from '@angular/material/divider';
import {
  MatDialogModule
} from '@angular/material/dialog';
import { GoArtworksComponent } from './sections/artworks/go-artworks.component';
import { HobbiesComponent } from './sections/hobbies/hobbies.component';
// import { ManualButtonComponent, ManualModalComponent } from './manual/manual.component';


import { SummaryService } from './sections/services/summary.service';
import { ProjectsService } from './sections/services/projects.service';
import { HobbiesService } from './sections/services/hobbies.service';
import { GoArtworksService } from './sections/services/go-artworks.service';


@NgModule({
  declarations: [
    SpheresComponent,
    PosComponent,
    PortfolioComponent,
    SceneComponent,
    SummaryComponent,
    ProjectsComponent,
    GoArtworksComponent,
    HobbiesComponent,
    // ManualButtonComponent,
    // ManualModalComponent
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
    MatDividerModule,
    MatDialogModule,
    AsyncPipe
  ],
  exports: [
    SpheresComponent,
    PosComponent,
    PortfolioComponent,
    SceneComponent,
    SummaryComponent,
    ProjectsComponent,
    GoArtworksComponent,
    HobbiesComponent,
    // ManualButtonComponent,
    // ManualModalComponent
  ],
  providers: [
    SummaryService,
    ProjectsService,
    HobbiesService,
    GoArtworksService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioModule { }
