import { ApplicationRef, Component, HostBinding } from '@angular/core';

import { iSpellText } from '../services/utils';
import { SummaryService } from '../services/summary.service';


@Component({
  selector: 'portfolio-summary',
  templateUrl: './summary.component.html',
  styles: [`
    .space-around_children::ng-deep * { justify-content: space-around }
    .example-header-image {
        background-image: url("/assets/profile-circle-small.webp");
        background-size: cover;
      }
  `]
})
export class SummaryComponent {

  technologies:string[] = [ 'THREE', 'C#', 'HTML', 'JS', 'ANGULAR', 'CSS', 'REACT', 'NODE', 'EXPRESS', 'TS', 'REDUX', 'ASP', 'UNITY3D', 'SQL', 'MONGO'];

  text = `
  As a developer I worked hard for the achievement of the best user experience including backoffice, databases and APIs.
  Alone and in small groups, I participated in the creation of web applications using the latest technologies.
  In big applications I resolved performance issues and functional entangles, changed technologies ,added processes, and tests.
  `
  showContent = false
  spelledOut = ''
  spellText:iSpellText = {
    chars: 'Fullstack developer',
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
        this.showContent = true
        this._applicationRef.tick()
      }
    });
  }

  @HostBinding("style") hostStyle = "display: block; height: max-content; padding: 10vh 0"
}