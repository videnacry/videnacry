import { ApplicationRef, Component, Input, OnInit } from '@angular/core';

import { spellSubscriber, iSpellText } from '../sections/services/utils';


@Component({
    selector: 'portfolio-modal-header',
    template: `
    <mat-card-actions align="end">
        <button mat-button (click)="closeModal()">&times;</button>
    </mat-card-actions>

    <mat-card-header [style]="{paddingTop:0}">
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{spelledOut}}</mat-card-title>
        <mat-card-subtitle>Berón Gamboa Gavilanes</mat-card-subtitle>
    </mat-card-header>      
    <mat-divider />
    `,
    styles: [`
    .example-header-image {
        background-image: url("/assets/profile-circle-small.webp");
        background-size: cover;
        }
    `]
})
export class ModalHeaderComponent implements OnInit {

    @Input() closeModal = () => {}
    @Input() loadedHandler = () => {}
    
    spelledOut = ''
    @Input() spellText:iSpellText = {
    chars: `
    modal header
    `,
    isActive: true
    }
    constructor (private _applicationRef:ApplicationRef) {}

    ngOnInit(): void {
        spellSubscriber(this.spellText).subscribe({
            next: spellOut => {
            this.spelledOut = spellOut;
            this._applicationRef.tick() // angular-three is messing with the lifecycle of the components instantiated by its click event in sheres.component.ts
            },
            error: err => console.error('Observable emitted an error: ' + err),
            complete: () => this.loadedHandler()
        })
    }

}