import { Component, inject } from '@angular/core';
import { map } from 'rxjs';

import { PointLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { extend, NgtStore, injectNgtLoader } from 'angular-three';
import { OrbitControls } from 'three-stdlib';

import { RoomService } from './sections/services/room.service';

extend({ PointLight, OrbitControls })

//"Silent Hill 2 Baldwin Study Room Normal" (https://skfb.ly/oNQzL) by Rehman_Is_Here is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
//https://sketchfab.com/3d-models/silent-hill-2-baldwin-study-room-normal-6ffb8a5f2da24be2942a95351abf2883#download
@Component({
  selector: 'portfolio-scene',
  template: `
    <ngt-point-light [position]="-1" [intensity]="1"/>
    <ngt-primitive  *args="[model$ | ngtPush]" [scale]="1" [position]="[ roomService.threePos.x, roomService.threePos.y, roomService.threePos.z ]" />
    <portfolio-ngt-spheres />
    <ngt-orbit-controls *args="[camera, glDom]" [enableDamping]="true" />
  `,
})
export class SceneComponent {
  
  get roomService () { return this._roomService }

  constructor ( private _roomService:RoomService) { }
  readonly model$ = injectNgtLoader(() => GLTFLoader, 'assets/silent_hill_2_baldwin_study_room_normal.glb').pipe(map((model:any) => model.scene));

  private readonly store = inject(NgtStore);
  readonly camera = this.store.get('camera');
  readonly glDom = this.store.get('gl', 'domElement');
}
