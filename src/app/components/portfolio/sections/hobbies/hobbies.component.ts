import { ApplicationRef, Component } from '@angular/core';

import { iSpellText } from '../services/utils';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'portfolio-hobbies',
  templateUrl: './hobbies.component.html',
  styles: [`
    .space-around_children::ng-deep * { justify-content: space-around }
  `]
})
export class HobbiesComponent {

  panelOpenState = false;
  hobbies:string[] = ['drawing', 'philosophy', 'the gym', 'pets', 'the buffet', 'music', 'recycling', 'etc']

  showContent = false
  spelledOut = ''
  spellText:iSpellText = {
    chars: `
    Hoobies data
    `,
    isActive: true
  }

  constructor (private _applicationRef:ApplicationRef, private _dialogRef:DialogRef) {}
  
  loadedHandler = () => {
    this.showContent = true
    this._applicationRef.tick()
  }

  closeModal = () => {
    this._dialogRef.close()
  }

}