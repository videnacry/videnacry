import { ApplicationRef, Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';

import { iSpellText } from '../services/utils';
import { ProjectsService } from '../services/projects.service';

import projects from './projects';

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
  constructor (private _state:ProjectsService, private _applicationRef:ApplicationRef, breakpointObserver: BreakpointObserver) {
    this._state.spellSubscriber(this.spellText).subscribe({
      next: spellOut => {
        this.spelledOut = spellOut;
        this._applicationRef.tick()
      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => {
        this.showProjects = true
        this._applicationRef.tick()
      }
    });

    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  stopPropagation = (e:Event) => { e.stopPropagation(); this._applicationRef.tick() }

  @HostBinding("style") hostStyle = "display: block; height: max-content; padding: 10vh 0"
}
