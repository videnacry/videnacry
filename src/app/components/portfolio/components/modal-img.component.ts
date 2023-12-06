import { DialogRef } from '@angular/cdk/dialog';
import { Component, Input, Inject, AfterViewChecked } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface iModalImgData { img:string, title:string }

/**
 * @title Manual modal controller
 */
@Component({
  selector: 'portfolio-modal-img',
  template: `<img mat-card-image (click)="openDialog()" [src]="img" [alt]="title" [style]="{width:'100%', height:'auto', marginBottom:'12px', marginTop: '12px', cursor: 'zoom-in'}">`,
})
export class ModalImgComponent implements AfterViewChecked {

    @Input() img = ''
    @Input() title = ''
    private _data = { img:this.img, title:this.title }

  constructor (public dialog: MatDialog) {}

  openDialog (): void {
    this.dialog.open(ExpandedImgComponent, {
        maxWidth: 'unset',
        width: '100vw',
        height: '100vh',
        panelClass: 'dialog-no-bg',
        enterAnimationDuration: '800ms',
        exitAnimationDuration: '800ms',
        data: this._data,
    })
  }

  ngAfterViewChecked(): void {
    this._data.img = this.img
    this._data.title = this.title
  }
}



/**
 * @title Manual modal view
 */
@Component({
    selector: 'portfolio-expanded-img',
    template: `
    <div (click)="close()" class="img-container">
        <img mat-card-image (click)="toggleZoom($event)" [src]="data.img" [alt]="data.title" class="img">
    </div>`,
    styles: [`
        .img-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }
        .img {
            width: 60%;
            height: auto;
            cursor: zoom-in;
        }
        .zoom-in {
            display: block;
        }
        .zoom-in>img {
            width: 136%;
            cursor: zoom-out;
        }
        @media screen and (max-aspect-ratio: 1.4 ) {
            .zoom-in>img {
                width: 180%;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
            .img {
            width: 90%;
            }
        }
    `]
})
export class ExpandedImgComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data:iModalImgData, private _dialogRef:DialogRef) {}

    close = () => this._dialogRef.close()
    toggleZoom = (e:any) => {
        e.stopPropagation()
        e.currentTarget.parentElement.classList.toggle('zoom-in')
    }
}