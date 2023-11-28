import { Component } from '@angular/core';

import { SummaryService } from './services/summary.service';
import { ProjectsService } from './services/projects.service';


@Component({
  selector: 'portfolio-pos',
  template: `
  <div [style]="{position: 'absolute', top: '0'}">
    <div>
        <h1>projects</h1>
        <input id="x" type="number" [value]="projects.threePos.x" (input)="setProjectsX($event)">
        <input id="y" type="number" [value]="projects.threePos.y" (input)="setProjectsY($event)">
        <input id="z" type="number" [value]="projects.threePos.z" (input)="setProjectsZ($event)">
    </div>
    <div>
        <h1>summary</h1>
        <input id="x" type="number" [value]="summary.threePos.x" (input)="setSummaryX($event)">
        <input id="y" type="number" [value]="summary.threePos.y" (input)="setSummaryY($event)">
        <input id="z" type="number" [value]="summary.threePos.z" (input)="setSummaryZ($event)">
    </div>
  </div>`
})
export class PosComponent {
  
  get projects () { return this._projects }
  get summary () { return this._summary }

  constructor (private _summary:SummaryService, private _projects:ProjectsService) { }

  setProjectsX = ($event:any):void  => { this.projects.updateThreePos({ x: $event.target.value }) }
  setProjectsY = ($event:any):void  => { this.projects.updateThreePos({ y: $event.target.value }) }
  setProjectsZ = ($event:any):void  => { this.projects.updateThreePos({ z: $event.target.value }) }
  
  setSummaryX = ($event:any):void  => { this.summary.updateThreePos({ x: $event.target.value }) }
  setSummaryY = ($event:any):void  => { this.summary.updateThreePos({ y: $event.target.value }) }
  setSummaryZ = ($event:any):void  => { this.summary.updateThreePos({ z: $event.target.value }) }

}