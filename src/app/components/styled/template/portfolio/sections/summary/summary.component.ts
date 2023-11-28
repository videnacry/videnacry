import { ApplicationRef, Component, HostBinding, HostListener } from '@angular/core';

import { iSpellText } from '../services/section.service.template';
import { SummaryService } from '../services/summary.service';


@Component({
  selector: 'portfolio-summary',
  templateUrl: './summary.component.html',
  styles: [`
    .space-around_children::ng-deep * { justify-content: space-around }
    .portfolio-summary { left: 50%; transform: translateX(-50%); max-width: 400px; width: 90% }
    .example-header-image {
        background-image: url("/assets/profile-circle-small.webp");
        background-size: cover;
      }
  `]
})
export class SummaryComponent {

  technologies:string[] = []

  spelledOut = ''
  spellText:iSpellText = {
    chars: `
    As a developer I worked hard for the achievement of the best user experience including backoffice, databases and APIs.
    Alone and in small groups, I participated in the creation of web applications using the latest technologies.
    In big applications I resolved performance issues and functional entangles, changed technologies ,added processes, and tests.
    `,
    isActive: true
  }
  constructor (private _state:SummaryService, private _applicationRef:ApplicationRef) {
    this._state.spellSubscriber(this.spellText).subscribe({
      next: spellOut => {
        this.spelledOut = spellOut;
        this._applicationRef.tick()
      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => {
        this.technologies = [ 'THREE', 'C#', 'HTML', 'JS', 'ANGULAR', 'CSS', 'REACT', 'NODE', 'EXPRESS', 'TS', 'REDUX', 'ASP', 'UNITY3D', 'SQL', 'MONGO'];
        this._applicationRef.tick()
      }
    });
  }

  stopPropagation = (e:Event) => e.stopPropagation()

  @HostBinding("style") hostStyle = "position: absolute; top: 0; left: 0; width: 100%; height: max-content; padding: 10vh 0"
  @HostListener("click") closeModal = () => { this._state.toggleIsActive(); this.spellText.isActive = false; this._applicationRef.tick() }
}