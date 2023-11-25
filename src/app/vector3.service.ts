import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vector3Service {

  constructor() { }
  x = -50
  y = -40
  z = 50
  setX = (aX:number) => this.x = aX
  setY = (aY:number) => this.y = aY
  setZ = (aZ:number) => this.z = aZ
  
}
