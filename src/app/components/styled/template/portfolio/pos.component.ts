import { Component } from '@angular/core';

import { PortfolioSection, PortfolioService } from './portfolio.service';


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
  private _projects: PortfolioSection = new PortfolioSection({ x: 0, y: 0, z: 0 })
  get projects () { return this._projects }
  private _summary: PortfolioSection = new PortfolioSection({ x: 0, y: 0, z: 0 })
  get summary () { return this._summary }

  constructor ({ projects: aProjects, summary: aSummary }: PortfolioService) {
    this._projects = aProjects
    this._summary = aSummary
  }

  setProjectsX = ($event:any):void  => { this.projects.setX($event.target.value) }
  setProjectsY = ($event:any):void  => { this.projects.setY($event.target.value) }
  setProjectsZ = ($event:any):void  => { this.projects.setZ($event.target.value) }
  
  setSummaryX = ($event:any):void  => { this.summary.setX($event.target.value) }
  setSummaryY = ($event:any):void  => { this.summary.setY($event.target.value) }
  setSummaryZ = ($event:any):void  => { this.summary.setZ($event.target.value) }

}