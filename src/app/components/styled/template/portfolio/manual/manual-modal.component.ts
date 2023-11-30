import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { iManualData } from './manual-button.component';

/**
 * @title Manual modal view
 */
@Component({
    selector: 'portfolio-manual-modal',
    template: `
    <mat-card>

        <mat-card-header >
            <div mat-card-avatar class="example-header-image"></div>
            <mat-card-title>{{ data.spelledOut }}</mat-card-title>
            <mat-card-subtitle>Berón Gamboa Gavilanes</mat-card-subtitle>
        </mat-card-header>
        <mat-divider />


        <mat-card-content *ngIf="data.showContent">
            <p>
                Click on any of the floating red spheres in the room to reveal their contents!
                If you want to move directly to the artworks gallery click on the one on the door.
            </p>

            <mat-divider />
            <mat-card-subtitle>Screenshot</mat-card-subtitle>
            <img mat-card-image src="/assets/manual.webp" alt="manual" [style]="{width:'100%', height:'100%', marginBottom:'12px'}">
            <mat-divider />

            <mat-card-subtitle>Map of the spheres</mat-card-subtitle>
            <table matSort (matSortChange)="data.sortSpheres($event)" [style]="{width:'100%'}">
                <tr>
                <th mat-sort-header="content">Content</th>
                <th mat-sort-header="location">Location</th>
                </tr>
            
                <!-- 
                    this is for using the track from the matSort, to make it work is needed {
                        "angularCompilerOptions": {
                            ....
                            "_enabledBlockTypes": [
                            "if", "switch", "for", "defer"
                            ]
                        }
                    }
                @for (sphere of spheres; track sphere) { 
                -->
                <tr *ngFor="let sphere of data.spheres;">
                    <td>{{ sphere.content }}</td>
                    <td>{{ sphere.location }}</td>
                </tr>
                <!-- } -->
            </table>

        </mat-card-content>


        </mat-card>
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

    constructor(@Inject(MAT_DIALOG_DATA) public data:iManualData) { }
}