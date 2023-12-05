import { ApplicationRef, Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';

import { iSpellText } from '../services/utils';

import projects from './projects';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styles: [`
    .space-around_children::ng-deep * { justify-content: space-around }
    .example-header-image {
      background-image: url('/assets/profile-circle-small.webp');
      background-size: cover;
    }
  `]
})
export class ProjectsComponent {

  stepperOrientation: Observable<StepperOrientation>;

  projects = projects
  showProjects = false
  
  spelledOut = ''
  spellText:iSpellText = {
    chars: 'Personal projects',
    isActive: true
  }

  constructor (private _applicationRef:ApplicationRef, private _dialogRef:DialogRef, abreakpointObserver:BreakpointObserver) {
    this.stepperOrientation = abreakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  loadedHandler = () => {
    this.showProjects = true
    this._applicationRef.tick()
  }

  closeModal = () => {
    this._dialogRef.close()
  }


  @HostListener('click') onClick = () => this._applicationRef.tick();
}
