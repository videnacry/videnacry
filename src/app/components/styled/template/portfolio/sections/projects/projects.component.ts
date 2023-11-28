import { ApplicationRef, Component, HostBinding, HostListener } from '@angular/core';
import { ProjectsService } from '../services/projects.service';


@Component({
  selector: 'portfolio-projects',
  template: `
  <mat-card class="example-card" >
    <mat-card-header >
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
    <mat-card-content>
        <p>
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
        </p>
    </mat-card-content>
  </mat-card>
  `,
  styles: [`
      .example-card { max-width: 400px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) }
      .hide { display: none }
      .example-header-image {
        background-image: url('/assets/profile-circle-small.webp');
        background-size: cover;
      }
  `]
})
export class ProjectsComponent {

  constructor (private _state:ProjectsService, private _applicationRef:ApplicationRef) {}

  @HostBinding("style") hostStyle = "position: absolute; top: 0; left: 0; width: 100%; height: 100%"
  @HostListener("click") closeModal = () => { this._state.toggleIsActive(); this._applicationRef.tick() }
}