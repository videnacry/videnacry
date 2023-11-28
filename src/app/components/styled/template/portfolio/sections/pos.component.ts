import { Component } from '@angular/core';

import { SummaryService } from './services/summary.service';
import { ProjectsService } from './services/projects.service';
import { SectionServiceTemplate } from './services/section.service.template';


@Component({
  selector: 'portfolio-pos',
  template: `
  <div [style]="{position: 'absolute', top: '0', backgroundColor:'rgb(66 66 66 / 31%)', padding: '1vmin'}">
    <div *ngFor="let pos of positions" >
      <h1 [style]="{color:'#ffffff99'}">{{pos.name}}</h1>
      <mat-form-field appearance="outline" *ngFor="let axis of pos.axes" [style]="{width:'90px'}">
        <mat-label>{{axis.label}}</mat-label>
        <input matInput placeholder="0" [value]="axis.value" (input)="axis.set($event)" type="number">
        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->
      </mat-form-field>
    </div>
  </div>
  `,
  styles: [`
    .example-spacer {
      flex: 1 1 auto;
    }
  `]
})
export class PosComponent {

  positions

  constructor (_summaryService:SummaryService, _projectsService:ProjectsService) {

    /**
     * returns an object with each section (summary, projects...) sphere position and setter to modify it
     */
    const getSectionThreePos = (aName:string, aService:SectionServiceTemplate) => {

      const { x, y, z } = aService.threePos
      const setX = ({target}:any):void  => { aService.updateThreePos({ x: target.value }) }
      const setY = ({target}:any):void  => { aService.updateThreePos({ y: target.value }) }
      const setZ = ({target}:any):void  => { aService.updateThreePos({ z: target.value }) }

      const res = {
        name: aName,
        axes: [
          { value: x, set: setX, label: 'x axis' },
          { value: y, set: setY, label: 'y axis' },
          { value: z, set: setZ, label: 'z axis' }
        ]
      }
      
      return res
    }

    const summaryThreePos = getSectionThreePos('Summary sphere', _summaryService)
    const projectsThreePos = getSectionThreePos('Projects sphere', _projectsService)

    this.positions = [ summaryThreePos, projectsThreePos ]
  }


}