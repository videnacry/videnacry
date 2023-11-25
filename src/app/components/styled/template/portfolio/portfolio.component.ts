import { CUSTOM_ELEMENTS_SCHEMA, Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';

import * as THREE from 'three'

import { NgtPush, NgtArgs, extend, injectNgtLoader, NgtCanvas, NgtStore, NgtBeforeRenderEvent } from 'angular-three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three-stdlib';
import { Vector3Service } from 'src/app/vector3.service';

extend(THREE)
extend({ OrbitControls })

@Component({
  selector: 'canvas',
  standalone: true,
  template: `<ngt-point-light [position]="-1" [intensity]="1"/> <ngt-primitive  *args="[model$ | ngtPush]" [scale]="1" [position]="[pos.x, pos.y, pos.z]" /> <ngt-orbit-controls *args="[camera, glDom]" [enableDamping]="true" />`,
  imports: [NgtPush, NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Room implements OnInit {
  sceneRef: {current:any} = { current: null }
  pos
  constructor (vector3Service: Vector3Service) {
    this.pos = vector3Service
    setTimeout( () => console.log(this.sceneRef.current), 3000)
  }
  
  readonly model$ = injectNgtLoader(() => GLTFLoader, 'assets/silent_hill_2_baldwin_study_room_normal.glb').pipe(map((model:any) => { this.sceneRef.current = model.scene; return model.scene}));
  private readonly store = inject(NgtStore);
  readonly camera = this.store.get('camera');
  readonly glDom = this.store.get('gl', 'domElement');

  clickEvent = (e:any):void => {
    if (this.sceneRef?.current != null) {

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      pointer.x = ( e.clientX / window.innerWidth ) * 2 - 1;
      pointer.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
      raycaster.setFromCamera( pointer, this.camera );
      const intersects = raycaster.intersectObjects( [this.sceneRef.current] );
      if (intersects.length > 0) console.log('intersected clicked')
    }
  }
  ngOnInit(): void {
    window.addEventListener('click', this.clickEvent)
  }
  

}
//"Silent Hill 2 Baldwin Study Room Normal" (https://skfb.ly/oNQzL) by Rehman_Is_Here is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
//https://sketchfab.com/3d-models/silent-hill-2-baldwin-study-room-normal-6ffb8a5f2da24be2942a95351abf2883#download
@Component({
  selector: 'app-portfolio',
  standalone: true,
  template: `<ngt-canvas [sceneGraph]="SceneGraph" />
  <div [style]="{position: 'absolute', top: '0'}"><input id="x" type="number" [value]="vector3Service.x" (input)="setX($event)"><input id="y" type="number" [value]="vector3Service.y" (input)="setY($event)"><input id="z" type="number" [value]="vector3Service.z" (input)="setZ($event)"></div>`,
  imports: [NgtCanvas, ReactiveFormsModule],
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  vector3Service
  constructor (vector3Service: Vector3Service) {
    this.vector3Service = vector3Service
  }
  readonly SceneGraph = Room;

  setX = ($event:any):void  => { this.vector3Service.setX($event.target.value); console.log(this.vector3Service) }
  setY = ($event:any):void  => { this.vector3Service.setY($event.target.value); console.log(this.vector3Service) }
  setZ = ($event:any):void  => { this.vector3Service.setZ($event.target.value); console.log(this.vector3Service) }

}