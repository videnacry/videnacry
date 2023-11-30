import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';

import { iSpellText, spellSubscriber } from '../sections/services/utils';
import { ManualModalComponent } from './manual-modal.component';

interface iSpheres { content: string, location: string }
export interface iManualData { showContent:boolean, spelledOut:string, spellText:iSpellText, sortSpheres:(sort: Sort) => void, spheres:iSpheres[] }

/**
 * @title Manual modal controller
 */
@Component({
  selector: 'portfolio-manual-button',
  template: `<button  mat-raised-button color="primary" (click)="openDialog('380px')" [style]="{position:'fixed', top:'2vmin', right:'2vmin'}">Help!</button>`,
})
export class ManualButtonComponent {

  spheres:iSpheres[] = [
    { content: 'software-summary', location: 'big desk' },
    { content: 'hobbies-data', location: 'tiny desk' },
    { content: 'personal-projects', location: 'sideboard' },
    { content: 'go-to-artworks', location: 'door' }
  ]
  data:iManualData

  constructor (public dialog: MatDialog) {
    this.data = {
      showContent: false,
      spelledOut: '',
      spellText: {
        chars: `
        Manual
        `,
        isActive: true
      },
      spheres: this.spheres.slice(),
      sortSpheres: this.sortSpheres
    }
  }
  
  sortSpheres = (sort: Sort) => {
    const data = this.spheres.slice();
    if (!sort.active || sort.direction === '') {
      this.data.spheres = data;
      return;
    }

    this.data.spheres = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'content':
          return compare(a.content, b.content, isAsc);
        case 'location':
          return compare(a.location, b.location, isAsc);
        default:
          return 0;
      }
    });
    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  openDialog (width:string): void {
    spellSubscriber(this.data.spellText).subscribe({
        next: spellOut => this.data.spelledOut = spellOut,
        error: err => console.error('Observable emitted an error: ' + err),
        complete: () => this.data.showContent = true
    });
    this.dialog.open(ManualModalComponent, {
        maxWidth: '90vw',
        width,
        enterAnimationDuration: '800ms',
        exitAnimationDuration: '800ms',
        data: this.data
    });
  }
}

