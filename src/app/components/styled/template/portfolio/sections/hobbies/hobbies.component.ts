import { ApplicationRef, Component } from '@angular/core';

import { iSpellText } from '../services/utils';
import { HobbiesService } from '../services/hobbies.service';


@Component({
  selector: 'portfolio-hobbies',
  templateUrl: './hobbies.component.html',
  styles: [`
    .space-around_children::ng-deep * { justify-content: space-around }
    .example-header-image {
        background-image: url("/assets/profile-circle-small.webp");
        background-size: cover;
      }
  `]
})
export class HobbiesComponent {

  panelOpenState = false;
  hobbies:string[] = ['drawing', 'philosophy', 'the gym', 'pets', 'the buffet', 'music', '...']

  showContent = false
  spelledOut = ''
  spellText:iSpellText = {
    chars: `
    Hoobies data
    `,
    isActive: true
  }
  constructor (private _state:HobbiesService, private _applicationRef:ApplicationRef) {
    this._state.spellSubscriber(this.spellText).subscribe({
      next: spellOut => {
        this.spelledOut = spellOut;
        this._applicationRef.tick()
      },
      error: (err:any) => console.error('Observable emitted an error: ' + err),
      complete: () => {
        this.showContent = true
        this._applicationRef.tick()
      }
    });
  }

}