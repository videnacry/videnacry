import { ApplicationRef, Component, HostBinding } from '@angular/core';

import { iSpellText } from '../services/utils';
import { DialogRef } from '@angular/cdk/dialog';


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

  showContent = false
  spelledOut = ''
  spellText:iSpellText = {
    chars: 'Fullstack developer',
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