import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { iManualData } from './manual-button.component';
import { DialogRef } from '@angular/cdk/dialog';

/**
 * @title Manual modal view
 */
@Component({
    selector: 'portfolio-manual-modal',
    template: `
    <div [style]="{height:'10vh'}" (click)="closeModal()"></div>

    <mat-card>

    <portfolio-modal-header [spellText]="data.spellText" [loadedHandler]="loadedHandler" [closeModal]="closeModal"/>


        <mat-card-content *ngIf="data.showContent">
        
            <p>
                Click on any of the floating red spheres in the room to reveal their contents!
                If you want to move directly to the artworks gallery click on the one on the door.
            </p>

            <mat-divider />
            <mat-card-subtitle>Screenshot</mat-card-subtitle>
            <portfolio-modal-img img="/assets/manual.webp" title="manual" />
            <mat-divider />

            <mat-card-subtitle>Map of the spheres</mat-card-subtitle>
            <table matSort (matSortChange)="data.sortSpheres($event)" [style]="{width:'100%'}">
                <tr>
                <th mat-sort-header="content">Content</th>
                <th mat-sort-header="location">Location</th>
                </tr>
                <tr *ngFor="let sphere of data.spheres;">
                    <td>{{ sphere.content }}</td>
                    <td>{{ sphere.location }}</td>
                </tr>
            </table>

        </mat-card-content>


    </mat-card>
    <div [style]="{height:'10vh'}" (click)="closeModal()"></div>

    `,
    styles: [`
    .space-around_children::ng-deep * { justify-content: space-around }
    .example-header-image {
        background-image: url("/assets/profile-circle-small.webp");
        background-size: cover;
      }
  `]
})
export class ManualModalComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data:iManualData, dialogRef:DialogRef) {
        
      this.loadedHandler = () => {
        this.data.showContent = true
      },
      this.closeModal = () => {
        dialogRef.close()
      }
    }

    loadedHandler
    closeModal
    
}