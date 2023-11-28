import { ApplicationRef, Component, HostBinding, HostListener } from '@angular/core';

import { iSpellText } from '../services/section.service.template';
import { SummaryService } from '../services/summary.service';


@Component({
  selector: 'portfolio-summary',
  template: `
    <mat-card class="portfolio-summary">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Berón Gamboa Gavilanes</mat-card-title>
        <mat-card-subtitle>Full stack developer</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>{{ spelledOut }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .portfolio-summary { max-width: 400px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) }
    .hide { display: none }
    .example-header-image {
        background-image: url("/assets/profile-circle-small.webp");
        background-size: cover;
      }
  `]
})
export class SummaryComponent {

  get state () { return this._state }
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
      next: spellOut => {this.spelledOut = spellOut; this._applicationRef.tick()},
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => alert('completeed')
    });
  }

  @HostBinding("style") hostStyle = "position: absolute; top: 0; left: 0; width: 100%; height: 100%"
  @HostListener("click") closeModal = () => { this._state.toggleIsActive(); this.spellText.isActive = false; this._applicationRef.tick() }
}