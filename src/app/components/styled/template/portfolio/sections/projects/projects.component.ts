import { ApplicationRef, Component, HostBinding, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';

import { ProjectsService } from '../services/projects.service';

import projects from './projects';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styles: [`
    .space-around_children::ng-deep * { justify-content: space-around }
    .example-card { left: 50%; transform: translateX(-50%); max-width: 500px; width: 90% }
    .example-header-image {
      background-image: url('/assets/profile-circle-small.webp');
      background-size: cover;
    }
  `]
})
export class ProjectsComponent {

  projects = projects

  stepperOrientation: Observable<StepperOrientation>;

  constructor (private _state:ProjectsService, private _applicationRef:ApplicationRef, breakpointObserver: BreakpointObserver,) {
    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  stopPropagation = (e:Event) => { e.stopPropagation(); this._applicationRef.tick() }

  @HostBinding("style") hostStyle = "position: absolute; top: 0; left: 0; width: 100%; height: max-content; padding: 10vh 0"
  @HostListener("click") closeModal = () => { this._state.toggleIsActive(); this._applicationRef.tick() }
}